import React from 'react'
import { loader } from "../../../assets";
import { Heading } from "../../atoms/heading/list/";
import { CampaignCard } from "../../organisms/card/campaign";
import { useNavigate } from "react-router-dom";
import {Loader} from "../loader/data";

const CampaignList = ({ title, isLoading, campaigns}) => {
    const navigate = useNavigate();
    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, {state: {campaign}})
    }
    return (
        <div>
            <Heading
                title={title}
                campaigns={campaigns}
            />
            <div className="flex flex-wrap mt-[20px] gap-[26px]">
                <Loader
                    isLoading={isLoading}
                />
                {!isLoading && campaigns.length === 0 && (
                    <span className="font-epilogue font-semibold prose-sm leading-[30px] text-gray-500">
                        You have no campaigns yet
                    </span>
                    )}
                {!isLoading && campaigns.length > 0 && (campaigns.map((campaign) => (
                    <CampaignCard
                        key={campaign.title}
                        {...campaign}
                        handleClick={() => handleNavigate(campaign)}
                    />)
                ))}
            </div>
        </div>
    );
}

export default CampaignList
