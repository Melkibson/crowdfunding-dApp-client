import React, {useEffect, useState} from 'react'
import {Heading} from "../components/atoms/heading/list";
import {Card} from "../components/organisms/card/payment";
import {useStateContext} from "../context/contract";
import {Loader} from "../components/organisms/loader/transaction";
import {daysLeft} from "../utils";
import {loader} from "../assets";

const PaymentHistory = () => {
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
            fetchCampaigns().then(r => console.log("success fetching campaigns' user"))
        }
    }, [address, contract])

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
                {campaigns.map((campaign, index) => {
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
