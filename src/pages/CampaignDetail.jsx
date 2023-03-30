import React, {useEffect, useState} from 'react'
import {Progression} from "../components/molecules/progression";
import {useLocation} from "react-router-dom";
import {calculateBarPercentage, daysLeft} from "../utils";
import {Image} from "../components/atoms/image/detail/";
import {DataCard} from "../components/molecules/card/data";
import {UserCard} from "../components/molecules/card/user";
import {Heading} from "../components/atoms/heading/pages/detailCampaign";
import {thirdweb} from "../assets";
import {useStateContext} from "../context/contract";
import {Story} from "../components/molecules/detail/story";
import {Donators} from "../components/molecules/detail/donators";
import {Form} from "../components/organisms/form/fund";
import {ethers} from "ethers";
import {Loader} from "../components/organisms/loader/transaction";

const CampaignDetail = () => {
    const { state } = useLocation();
    const { donate, donationListener, contract } = useStateContext();

    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState(0);
    const [donators, setDonators] = useState([]);
    const remainingDays = daysLeft(state.campaign.deadline);

    const getDonatorsFromEvent = async (campaignId) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contractWithSigner = new ethers.Contract(contract.getAddress(), contract.abi, provider);
        const filter = contractWithSigner.filters.Donation(campaignId, null, null);
        const events = await contractWithSigner.queryFilter(filter);

        return events.map((event) => {
            const {args} = event;
            return {
                campaignId: args[0].toString(),
                donator: args[1],
                amount: ethers.utils.formatEther(args[2].toString()),
            };
        });
    };

    const fetchDonators = async (campaignId) => {
        return await getDonatorsFromEvent(campaignId).then((donators) => {
            const uniqueDonators = donators.reduce((accumulator, current) => {
                const existingDonator = accumulator.find(item => item.donator === current.donator);

                if (existingDonator) {
                    existingDonator.amount = parseFloat(existingDonator.amount) + parseFloat(current.amount);
                } else {
                    accumulator.push(current);
                }
                return accumulator;
            }, []);

            setDonators(uniqueDonators);
        });
    }

    useEffect(() => {
        if(contract){
            fetchDonators(state.campaign.pId);
            donationListener();
        }
    }, [])

     return (
        <div>
            {isLoading && <Loader/>}
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
                    <DataCard title="Total Backers" value={donators.length > 0 ? donators.length : 0} />
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
                <div className="flex-1">
                    <Heading
                        title="Fund"
                    />
                    <Form
                        setAmount={setAmount}
                        setIsLoading={setIsLoading}
                        donate={donate}
                        campaignId={state.campaign.pId}
                        amount={amount}
                    />
                </div>

            </div>
        </div>
    );
}

export default CampaignDetail
