import React from 'react'
import { Input } from "../../../atoms/input/form/fund";
import { Heading } from "../../../atoms/heading/form/fund";
import { Hook } from "../../../molecules/form/fund";
import { Button } from "../../../atoms/button";
import { useNavigate } from "react-router-dom";

const Form = ({ amount, setAmount, setIsLoading, donate, campaignId}) => {
    const navigate = useNavigate();
    const handleDonate = async () => {
        setIsLoading(true);
        await donate(campaignId, amount);
        navigate('/');
        setIsLoading(false)
    }

    return (
        <form className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
            <Heading
                content="Fund the campaign"
            />
            <div className="mt-[30px]">
                <Input
                    inputType="number"
                    placeholder="ETH 0.1"
                    step="0.01"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
            </div>
            <Hook/>
            <Button
                btnType="button"
                title="Fund campaign"
                styles="bg-lavender"
                handleClick={handleDonate}
            />
        </form>

        );
}

export default Form
