import React from 'react'
import { Input } from "../../atoms/input/form";
import {Banner} from "../../molecules/form";
import {Button} from "../../atoms/button";
import {ethers} from "ethers";

import { useStateContext } from "../../../context/contract";
import {checkIfImage} from "../../../utils";

const Form = ({ form, setForm, setIsLoading, navigate }) => {
    const { createCampaign } = useStateContext()
    const handleChange = (fieldName, e) => {
        setForm({...form, [fieldName]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        checkIfImage(form.image, async exists => {
            if(exists) {
                setIsLoading(true);
                await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18).toString()})
                setIsLoading(false);
                navigate('/')
            } else {
                alert('Provide a valid image URL');
                setForm({...form, image: ''});
            }
        })
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="w-full mt-[65px] flex flex-col gap-[30px]"
        >
            <div className="flex flex-wrap gap-[40px]">
                <Input
                    labelName="Your name *"
                    placeholder="John Doe"
                    inputType="text"
                    value={form.name}
                    handleChange={e => handleChange('name', e)}
                />
                <Input
                    labelName="CampaignDetail Title *"
                    placeholder="Write a title"
                    inputType="text"
                    value={form.title}
                    handleChange={e => handleChange('title', e)}
                />
            </div>
            <Input
                labelName="Story *"
                placeholder="Write your story"
                isTextArea
                value={form.description}
                handleChange={e => handleChange('description', e)}
            />
            <Banner/>
            <div className="flex flex-wrap gap-[40px]">
                <Input
                    labelName="Goal *"
                    placeholder="ETH 0.50"
                    inputType="text"
                    value={form.target}
                    handleChange={e => handleChange('target', e)}
                />
                <Input
                    labelName="End Date *"
                    placeholder="End date"
                    inputType="date"
                    value={form.deadline}
                    handleChange={e => handleChange('deadline', e)}
                />
            </div>
            <Input
                labelName="CampaignDetail image *"
                placeholder="Type the URL of your campaign image"
                inputType="text"
                value={form.image}
                handleChange={e => handleChange('image', e)}
            />
            <div className="flex justify-center items-center mt-[40px]">
                <Button
                    btnType="submit"
                    title="Submit new campaign"
                    styles='bg-green'
                />
            </div>

        </form>
    );
}

export default Form
