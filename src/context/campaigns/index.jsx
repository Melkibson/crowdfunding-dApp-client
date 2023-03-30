import React, {useContext, useEffect, useState} from 'react'
import { createContext } from "react";
import {useNavigate} from "react-router-dom";
import {useStateContext} from "../contract";

const StateContext = createContext();

export const CampaignStateContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [campaigns, setCampaigns] = useState([])
    const [userCampaigns, setUserCampaigns] = useState([])
    const [filteredCampaigns, setFilteredCampaigns] = useState(campaigns);

    const {
        address,
        contract,
        getCampaigns,
        getUserCampaigns,
    } = useStateContext()

    const fetchCampaigns = async () => {
        const campaigns = await getCampaigns()
        setCampaigns(campaigns)
        setIsLoading(false)
    }
    const fetchUserCampaigns = async () => {
        const campaigns = await getUserCampaigns()
        setUserCampaigns(campaigns)
        setIsLoading(false)
    }

    useEffect(() => {

        if(contract) {

            fetchCampaigns()
                .then(() => {
                    setFilteredCampaigns(campaigns)
                    console.log("success fetching campaigns")
                })
                .catch((err) => console.log('error fetching campaigns',err))
        }
        if(contract && address) {
            fetchUserCampaigns()
                .then(() => {
                    setFilteredCampaigns(userCampaigns)
                    console.log("success fetching user campaigns")
                })
                .catch((err) => console.log('error fetching user campaigns',err))

        }
    }, [address, contract])

    return(
        <StateContext.Provider
            value={{
                isLoading,
                setIsLoading,
                setCampaigns,
                campaigns,
                userCampaigns,
                setFilteredCampaigns,
                filteredCampaigns,
                setUserCampaigns
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const  useCampaignStateContext = () => useContext(StateContext);