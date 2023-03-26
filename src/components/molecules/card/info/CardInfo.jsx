import React from 'react'
import { Heading } from "../../../atoms/heading/card/info";
import { SubTitle } from "../../../atoms/text/card/info";

const CardInfo = ({amountCollected, target = '', content}) => {
    return (
            <div className="flex flex-col">
                <Heading
                    content={amountCollected}
                />
                <SubTitle
                    content={content}
                    data={target}
                />
            </div>
    );
}

export default CardInfo
