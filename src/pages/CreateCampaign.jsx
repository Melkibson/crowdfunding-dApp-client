import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import { ethers } from "ethers";

import { money } from '../assets'
import { Button } from "../components/atoms/button/custom";
import { checkIfImage } from "../utils";
import { Heading } from "../components/atoms/heading/pages/createCampaign";
import { Form } from "../components/organisms/form/";

const CreateCampaign = () => {
    const navigate = useNavigate();
    const initialForm = {
        name: '',
        title: '',
        description: '',
        target:'',
        deadline:'',
    }


    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState(initialForm);

    const handleSubmit = () => {

    }
    return (
            <div className="bg-gray-800 flex justify-center items-center flex-col sm:p-10 p-4 rounded-[10px]">
                {isLoading && 'Loading...'}
                <Heading/>
                <Form
                    handleSubmit={handleSubmit}
                    form={form}
                    setForm={setForm}
                />
            </div>
        );

}

export default CreateCampaign