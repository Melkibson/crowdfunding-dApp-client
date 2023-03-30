import React,{ useState, useEffect} from 'react'
import { useStateContext} from "../context/contract";
import { useCampaignStateContext } from "../context/campaigns";

import { List } from "../components/organisms/list";

const Home = () => {
    const {
        isLoading,
        filteredCampaigns
    } = useCampaignStateContext()

    return (
        <List
            isLoading={isLoading}
            campaigns={filteredCampaigns}
            title={`All ${filteredCampaigns.length > 1 ? "Campaigns" : "Campaign"}`}
        />
    );
}

export default Home
