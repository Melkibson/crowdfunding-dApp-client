import React from 'react'
import { Heading } from "../../../atoms/heading/form/fund/hook";
import { Paragraph } from "../../../atoms/paragraph/form/fund";

const Hook = () => {
    return (
        <div className="my-[20px] p-4 bg-gray-900 rounded-[10px]">
            <Heading
                content="Back it because you believe in it."
            />
            <Paragraph
                content="Support the project for no reward, just because it speaks to you."
            />
        </div>
    );
}

export default Hook
