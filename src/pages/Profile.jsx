import React from 'react'
import {List} from "../components/organisms/list";
import {useCampaignStateContext} from "../context/campaigns";

const Profile = () => {
    const { isLoading, campaigns } = useCampaignStateContext()
    return (
        <List
            isLoading={isLoading}
            campaigns={campaigns}
            title={`My ${campaigns.length > 1 ? "Campaigns" : "Campaign"}`}
        />
    );
}

export default Profile
