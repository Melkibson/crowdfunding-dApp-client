import React from 'react'

const Paragraph = ({content}) => {
    return (
        <p className="mt-[5px] font-epilogue font-normal prose-sm text-gray-400 text-left leading-[18px] truncate max-w-full">{content}</p>

    );
}

export default Paragraph
