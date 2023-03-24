import React from 'react'
import { Input } from "../../atoms/input/form";
import {money} from "../../../assets";
import {Banner} from "../../molecules/form";
import {Button} from "../../atoms/button/custom";

const Form = ({ handleSubmit, form, setForm }) => {
    const handleChange = () => {

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
                    handleChange={handleChange}
                />
                <Input
                    labelName="Campaign Title *"
                    placeholder="Write a title"
                    inputType="text"
                    value={form.name}
                    handleChange={handleChange}
                />
            </div>
            <Input
                labelName="Story *"
                placeholder="Write your story"
                isTextArea
                value={form.description}
                handleChange={handleChange}
            />
            <Banner/>
            <div className="flex flex-wrap gap-[40px]">
                <Input
                    labelName="Goal *"
                    placeholder="ETH 0.50"
                    inputType="text"
                    value={form.target}
                    handleChange={handleChange}
                />
                <Input
                    labelName="End Date *"
                    placeholder="End date"
                    inputType="date"
                    value={form.deadline}
                    handleChange={handleChange}
                />
            </div>
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
