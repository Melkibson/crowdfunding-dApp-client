import React from 'react'
import { useNavigate } from "react-router-dom";
import { tagType, thirdweb } from "../../../../assets";
import { daysLeft } from "../../../../utils";
import {Image, UserImage} from "../../../atoms/image/card";
import { Heading } from "../../../atoms/heading/card";
import { Description } from "../../../molecules/card/description";
import { Info } from "../../../molecules/card/info";

const CampaignCard = (props) => {
    const remainingDays = daysLeft(props.deadline);

    return (
        <div
            className="sm:w-[288px] w-full rounded-[15px] bg-gray-800 cursor-pointer"
            onClick={props.handleClick}
        >
            <Image
                src={props.image}
                alt="fund"
            />
            <div className="flex flex-col p-4">
                <Heading
                    category="Education"
                />
                <Description
                    title={props.title}
                    description={props.description}
                />
                <div className="flex justify-between flex-wrap mt-[15px] gap-2">

                    <Info
                        amountCollected={props.amountCollected}
                        target={props.target}
                        content="Raised of"
                    />
                    <Info
                        amountCollected={remainingDays}
                        content="Days Left"
                    />
                </div>
                <div className="flex items-center mt-[20px] gap-[12px]">
                    <UserImage/>
                    <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{props.owner}</span></p>

                </div>

            </div>



            </div>
    );
}

export default CampaignCard
