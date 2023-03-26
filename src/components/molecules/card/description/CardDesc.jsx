import React from 'react'
import { Heading } from "../../../atoms/heading/card/description";
import { SubTitle } from "../../../atoms/text/card/description";

const CardDesc = ({title, description}) => {
    return (
        <div className="block">
            <Heading
                title={title}
            />
            <SubTitle
                content={description}
            />
        </div>
    );
}

export default CardDesc
