import React from 'react'

const Image = ({src, alt}) => {
    return (
        <img src={src} alt={alt} className="w-full h-[158px] object-cover rounded-[14px]"/>
    );
}

export default Image
