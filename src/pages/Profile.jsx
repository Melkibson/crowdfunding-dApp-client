import React from 'react'
import {List} from "../components/organisms/list";
import {useCampaignStateContext} from "../context/campaigns";

const Profile = () => {
    const { isLoading, filteredCampaigns } = useCampaignStateContext()
    return (
        <List
            isLoading={isLoading}
            campaigns={filteredCampaigns}
            title={`My ${filteredCampaigns.length > 1 ? "Campaigns" : "Campaign"}`}
        />
    );
}

export default Profile
