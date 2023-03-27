import React from 'react'
import {Heading} from "../../../atoms/heading/pages/detailCampaign";
import Paragraph from "../../../atoms/paragraph/detail/description/Paragraph";

const Story = ({ title, description }) => {
    return (
        <div>
            <Heading title={title}
            />

            <div className="mt-[20px]">
                <Paragraph
                    content={description}
                    styles="text-justify"
                />
            </div>
        </div>
    );
}

export default Story
