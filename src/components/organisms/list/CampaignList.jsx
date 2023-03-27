import React from 'react'
import { loader } from "../../../assets";
import { Heading } from "../../atoms/heading/list/";
import { CampaignCard } from "../../organisms/card";
import { useNavigate } from "react-router-dom";

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
                {isLoading && (
                    <img
                        src={loader}
                        alt="loader"
                        className="w-[100px] h-[100px] object-contain"
                    />
                    )}
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
