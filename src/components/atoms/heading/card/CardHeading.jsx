import React from 'react'
import { FolderIcon } from "../../icon/card";

const CardHeading = ({ category }) => {
    return (
        <div className="flex items-center mb-[18px]">
            <FolderIcon/>
            <span className="font-epilogue font-medium mt-[2px] ml-[12px] text-[12px] text-gray-400">{category}</span>
        </div>
    );
}

export default CardHeading
