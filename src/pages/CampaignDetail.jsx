import React, { useState } from 'react'
import { Progression } from "../components/molecules/progression";
import { useLocation, useNavigate } from "react-router-dom";
import { calculateBarPercentage, daysLeft } from "../utils";
import { Image } from "../components/atoms/image/detail/";
import { DataCard } from "../components/molecules/card/data";
import { UserCard } from "../components/molecules/card/user";
import { Heading } from "../components/atoms/heading/pages/detailCampaign";
import {thirdweb} from "../assets";
import {useStateContext} from "../context/contract";
import {Story} from "../components/molecules/detail/story";
import {Donators} from "../components/molecules/detail/donators";

const CampaignDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { donate, getDonations, contract, address } = useStateContext();

    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [donators, setDonators] = useState([]);
    const remainingDays = daysLeft(state.campaign.deadline);


    return (
        <div>
            {isLoading && 'Loading...'}
            <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
                <div className="flex-1 flex-col">
                    <Image src={state.campaign.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl"/>
                    <div className="relative w-full h-[5px] bg-[#3a3a43] mt-2">
                        <Progression
                            target={state.campaign.target}
                            amountCollected={state.campaign.amountCollected}
                            calculate={calculateBarPercentage}
                        />
                    </div>
                </div>
                <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
                    <DataCard title="Days Left" value={remainingDays} />
                    <DataCard title={`Raised of ${state.campaign.target}`} value={state.campaign.amountCollected} />
                    <DataCard title="Total Backers" value={donators.length} />
                </div>
            </div>
            <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
                <div className="flex-[2] flex flex-col gap-[40px]">
                    <div>
                        <Heading title="Creator"/>
                        <UserCard
                            content="10 Campaigns"
                            image={thirdweb}
                            owner={state.campaign.owner}
                        />
                    </div>
                    <Story
                        title={state.campaign.title}
                        description={state.campaign.description}
                    />
                    <Donators
                        donators={donators}
                    />
                </div>
            </div>
        </div>
    );
}

export default CampaignDetail
