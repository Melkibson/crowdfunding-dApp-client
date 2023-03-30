import React from 'react'

const Input = ({ onChange }) => {
    return (
        <input
            type="text"
            placeholder="Search for campaigns"
            className="flex w-full font-epilogue font-normal prose prose-sm placeholder:text-gray-500 text-white bg-transparent outline-none"
            onChange={onChange}
        />
    );
}

export default Input
