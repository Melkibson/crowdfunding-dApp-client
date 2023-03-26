import React, {useEffect, useState} from 'react'
import {useStateContext} from "../context/contract";
import {List} from "../components/organisms/list";

const Profile = () => {
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
            fetchCampaigns().then(r => console.log("campaigns", r))
        }
    }, [address, contract])
    return (
        <List
            isLoading={isLoading}
            campaigns={campaigns}
            title={`My ${campaigns.length > 1 ? "Campaigns" : "Campaign"}`}
        />
    );
}

export default Profile
