import React from 'react'

const Image = ({src}) => {
    return (
        <img src={src} alt="" className="w-full h-[410px] object-cover rounded-xl"/>
    );
}

export default Image
