import React from 'react'

const Paragraph = ({content, styles}) => {
    return (
        <p className={`font-epilogue font-normal prose-base text-gray-400 leading-[26px] ${styles}`}>{content}</p>
    );
}

export default Paragraph
