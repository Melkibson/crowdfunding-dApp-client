import React, {useEffect, useState} from 'react'
import { Input } from "../../atoms/input/search";
import { Icon } from "../../atoms/icon/search";
import {useCampaignStateContext} from "../../../context/campaigns";
import {useLocation} from "react-router-dom";

const SearchBar = () => {
    const { campaigns, userCampaigns, setFilteredCampaigns } = useCampaignStateContext();
    const [search, setSearch] = useState('');
    const currentLocation = useLocation().pathname;

    useEffect(() => {
        if(currentLocation === '/profile') {
            setFilteredCampaigns(userCampaigns);
        } else setFilteredCampaigns(campaigns)

    }, [campaigns, userCampaigns]);

    useEffect(() => {
        const sourceCampaigns = currentLocation === '/profile' ? userCampaigns : campaigns;

        const updatedCampaigns = search === ''
            ? sourceCampaigns
            : sourceCampaigns.filter((campaign) => campaign.title.toLowerCase().includes(search.toLowerCase()));

        setFilteredCampaigns(updatedCampaigns);

    }, [campaigns, userCampaigns, search])

    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    return (
        <div className="lg:flex-1 flex flex-rox max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-gray-800 rounded-[100px]">
            <Input
                onChange={handleChange}
            />
            <Icon/>
        </div>

    );
}
export default SearchBar
