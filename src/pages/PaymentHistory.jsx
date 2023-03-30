import React from 'react'
import {Heading} from "../components/atoms/heading/list";
import {Card} from "../components/organisms/card/payment";
import {daysLeft} from "../utils";
import {loader} from "../assets";
import {useCampaignStateContext} from "../context/campaigns";

const PaymentHistory = () => {
    const { isLoading, userCampaigns } = useCampaignStateContext()
    return (
        <div>
            <Heading
                title="Payment History"
            />
            <div className="mt-5 bg-gray-800 flex justify-center items-center flex-col sm:p-10 p-4 rounded-[10px]">
                {isLoading && (
                    <img
                        src={loader}
                        alt="loader"
                        className="w-[100px] h-[100px] object-contain"
                    />
                )}
                {userCampaigns.map((campaign, index) => {
                    const remainingDays = daysLeft(campaign.deadline);
                    const status = campaign.deadline > Date.now() ? "Active" : "Ended"
                    return(
                            <Card
                                key={index}
                                title={campaign.title}
                                amountCollected={campaign.amountCollected}
                                target={campaign.target}
                                deadline={`${remainingDays} days`}
                                status={status}
                            />
                        )
                    })
                }
            </div>
        </div>

    );
}

export default PaymentHistory
