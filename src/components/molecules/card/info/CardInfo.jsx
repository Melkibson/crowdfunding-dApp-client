import React from 'react'
import { Heading } from "../../../atoms/heading/card/info";
import { Paragraph } from "../../../atoms/paragraph/card/info";

const CardInfo = ({amountCollected, target = '', content}) => {
    return (
            <div className="flex flex-col">
                <Heading
                    content={amountCollected}
                />
                <Paragraph
                    content={content}
                    data={target}
                />
            </div>
    );
}

export default CardInfo
