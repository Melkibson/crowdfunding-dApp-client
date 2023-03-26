import React, {useContext, createContext, useEffect} from 'react'
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import contractABI from '../../contractABI.json';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0x6Cac21618f416D5BF30549D47523Ff9c5A51E6eD', contractABI.abi);
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


    return(
        <StateContext.Provider
            value={{
                address,
                contract,
                createCampaign: publishCampaign,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const  useStateContext = () => useContext(StateContext);