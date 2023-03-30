import React from 'react'
import {Heading as CardHeading} from "../../../atoms/heading/card/info";
import { Paragraph } from "../../../atoms/paragraph/card/description";

const CardTable = ({content, title}) => {
    return (
        <div className="flex flex-col items-center sm:items-start">
            <div className="mb-3 sm:mb-0">
                <CardHeading
                    content={title}
                />
            </div>
            <div className="mb-3 sm:mb-0">
                <Paragraph content={content}/>
            </div>
        </div>
    );
}

export default CardTable
