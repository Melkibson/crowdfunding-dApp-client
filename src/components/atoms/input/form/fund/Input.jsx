import React from 'react'

const Input = ({ inputType, placeholder, onChange, step = "1" }) => {
    return (
        <input
            type={inputType}
            placeholder={placeholder}
            onChange={onChange}
            step={step}
            className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-gray-600 bg-transparent font-epilogue text-white prose-xl leading-[30px] placeholder:text-gray-500 rounded-[10px]"
        />

    );
}

export default Input
