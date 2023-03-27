import React from 'react'
import CardHeading from "../../../atoms/heading/card/data/CardHeading";
import { Paragraph } from "../../../atoms/paragraph/card/data";

const DataCard = ({title, value}) => {
    return (
        <div className="flex flex-col items-center w-[150px]">
            <CardHeading
                content={value}
            />
            <Paragraph
                content={title}
            />
        </div>
    );
}

export default DataCard
