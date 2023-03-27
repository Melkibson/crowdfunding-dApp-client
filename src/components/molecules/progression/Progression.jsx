import React from 'react'

const Progression = ({ target, amountCollected, calculate}) => {
    return (
        <div
            className="absolute h-full bg-[#4acd8d]"
            style={{
                width: `${calculate(target, amountCollected)}%`,
                maxWidth: '100%'
        }}></div>
        );
}

export default Progression
