import React from 'react'

const HeadingList = ({ title, campaigns = [] }) => {
    const hasCampaigns = campaigns.length > 0
    return (
        <h1 className="font-epilogue font-semibold text-white text-left">{title} {hasCampaigns && (campaigns.length > 0)}</h1>
    );
}

export default HeadingList
