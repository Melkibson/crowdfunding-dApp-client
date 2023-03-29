import React, {useContext, useEffect, useState} from 'react'
import { createContext } from "react";
import {useNavigate} from "react-router-dom";
import {useStateContext} from "../contract";

const StateContext = createContext();

export const CampaignStateContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [campaigns, setCampaigns] = useState([])
    const { address, contract, getUserCampaigns } = useStateContext()

    const fetchCampaigns = async () => {
        const campaigns = await getUserCampaigns()
        setCampaigns(campaigns)
        setIsLoading(false)
    }
    useEffect(() => {
        if(contract) {
            fetchCampaigns().then(r => console.log("success fetching campaigns' user"))
        }
    }, [address, contract])

    return(
        <StateContext.Provider
            value={{ isLoading, campaigns }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const  useCampaignStateContext = () => useContext(StateContext);