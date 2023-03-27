import React from 'react'
import { Heading } from "../../../atoms/heading/card/description";
import { Paragraph } from "../../../atoms/paragraph/card/description";

const CardDesc = ({title, description}) => {
    return (
        <div className="block">
            <Heading
                title={title}
            />
            <Paragraph
                content={description}
            />
        </div>
    );
}

export default CardDesc
