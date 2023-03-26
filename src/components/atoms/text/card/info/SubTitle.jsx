import React from 'react'

const SubTitle = ({content, data}) => {
    return (
        <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">{content} {data}</p>
    );
}

export default SubTitle
