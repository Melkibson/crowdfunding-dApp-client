import React from 'react'
import CardHeading from "../../atoms/heading/card/data/CardHeading";
import { SubTitle } from "../../atoms/text/card/data";

const DataCard = ({title, value}) => {
    return (
        <div className="flex flex-col items-center w-[150px]">
            <CardHeading
                content={value}
            />
            <SubTitle
                content={title}
            />
        </div>
    );
}

export default DataCard
