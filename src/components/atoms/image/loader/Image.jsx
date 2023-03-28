import React from 'react'

const Image = ({src, alt}) => {
    return (
        <img src={src} alt={alt} className="w-[100px] h-[100px] object-contain rounded-xl"/>
    );
}

export default Image
