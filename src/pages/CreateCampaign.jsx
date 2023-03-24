import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { money } from '../assets'
import { Button } from "../components/atoms/button/custom";
import { checkIfImage } from "../utils";

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

    return (
            <div className="bg-gray-800 flex  justify-center items-center flex-col rounded-[1Opx] sm:p-10 p-4">
                {isLoading && 'Loading...'}
            </div>
        );

}

export default CreateCampaign