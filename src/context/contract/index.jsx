import React, {createContext, useContext} from 'react'
import {useAddress, useContract, useContractWrite} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0x4d83f9C26B1839a56c0F1b68991a679484D8A906');
    const { mutateAsync: createCampaign, isLoading } = useContractWrite(contract, 'createCampaign');

    const address = useAddress();

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image

            ])
            console.log("contract call success", data)
        } catch (error) {
            console.log("contract call failure", error)
        }

    }

    const getCampaigns = async () => {
        const nbOfCampaigns = await contract.call('nbOfCampaigns');
        const campaigns = [];
        for(let i = 0; i < nbOfCampaigns; i++) {
            const campaign = await contract.call('campaigns', [i]);
             campaigns.push({
                owner: campaign.owner,
                title: campaign.title,
                description: campaign.description,
                target: ethers.utils.formatEther(campaign.target.toString()),
                deadline: campaign.deadline.toNumber(),
                amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
                image: campaign.image,
                pId: i
            })
        }
        return campaigns;
    }

    const getUserCampaigns = async () => {
        const allCampaigns = await getCampaigns();
        return allCampaigns.filter(campaign => campaign.owner === address);
    }

    const donate = async (campaignId, amount) => {
        return await contract.call(
            'donateToCampaign', campaignId,
                {
                    value: ethers.utils.parseEther(amount)
                })

    }

    const donationListener = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contractWithSigner = new ethers.Contract(contract.getAddress(), contract.abi, provider);
        contractWithSigner.on("Donation", (campaignId, donator, amount) => {
            console.log(`Donation for campaign: ${campaignId}`);
            console.log(`Donator: ${donator}`);
            console.log(`Amount: ${ethers.utils.formatEther(amount.toString())}`);
        });
    };

    return(
        <StateContext.Provider
            value={{
                address,
                contract,
                createCampaign: publishCampaign,
                getCampaigns,
                getUserCampaigns,
                donate,
                donationListener,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const  useStateContext = () => useContext(StateContext);