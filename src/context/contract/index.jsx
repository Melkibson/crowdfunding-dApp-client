import React, {createContext, useContext} from 'react'
import {useAddress, useContract, useContractWrite} from "@thirdweb-dev/react";
import {ethers} from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0x6Cac21618f416D5BF30549D47523Ff9c5A51E6eD');
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
        const campaigns = await contract.call('getCampaigns');
        return campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: i
        }))
    }

    const getUserCampaigns = async () => {
        const allCampaigns = await getCampaigns();
        return allCampaigns.filter(campaign => campaign.owner === address);
    }

    return(
        <StateContext.Provider
            value={{
                address,
                contract,
                createCampaign: publishCampaign,
                getCampaigns,
                getUserCampaigns,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const  useStateContext = () => useContext(StateContext);