import React from 'react'
import {Heading} from "../../../atoms/heading/card/user";
import Paragraph from "../../../atoms/paragraph/card/user/Paragraph";

const UserCard = ({ image, owner, content }) => {
    return (
        <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-gray-700 cursor-pointer">
                <img src={image} alt="user" className="w-[60%] h-[60%] object-contain"/>
            </div>
            <div>
                <Heading
                    content={owner}
                />
                <Paragraph
                    content={content}
                />
            </div>
        </div>
    );
}

export default UserCard
