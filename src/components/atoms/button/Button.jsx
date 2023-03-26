import React from 'react'

const Button = ({ btnType, title, handleClick}) => {
    return (
        <button
            type={btnType}
            className="font-epilogue font-semibold text-white min-h-[52px] px-4 rounded-[10px] bg-green prose-base"
            onClick={handleClick}>
            {title}
        </button>
    );
}

export default Button
