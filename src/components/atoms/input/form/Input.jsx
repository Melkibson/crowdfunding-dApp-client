import React from 'react'

const Input = ({labelName, placeholder, inputType, value, handleChange, isTextArea}) => {

    const styles = `py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-gray-600 rounded-[10px] bg-gray-800 
        text-gray-400 bg-transparent font-epilogue text-white prose-sm placeholder:text-gray-500 rounded-[10px] 
        sm:min-w-[300px]`

    return (
        <label className="flex-1 flex flex-col">
            {labelName && (
                <span className="font-epilogue font-medium prose-sm leading-[22px] text-gray-400 mb-[10px]">
                    {labelName}
                </span>
            )}
            {isTextArea ? (
                <textarea
                    required
                          value={value}
                          placeholder={placeholder}
                          onChange={handleChange}
                          rows="10"
                          className={styles}
                />
            ) : (<input
                required
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                type={inputType}
                step="0.1"
                className={styles}
                />)}
        </label>
    );
}

export default Input
