import React from 'react'

const CardHeading = ({content}) => {
    return (
        <h4 className="font-epilogue font-bold prose-3xl text-white p-3 bg-gray-800 rounded-t-[10px] w-full text-center truncate">{content}</h4>
    );
}

export default CardHeading
