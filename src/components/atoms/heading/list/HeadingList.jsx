import React from 'react'

const HeadingList = ({ title, campaigns }) => {
    return (
        <h1 className="font-epilogue font-semibold text-white text-left">{title} ({campaigns.length})</h1>
    );
}

export default HeadingList
