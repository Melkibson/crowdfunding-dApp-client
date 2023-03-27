import React from 'react'
import { List } from "./list";
import { Heading } from "../../../atoms/heading/pages/detailCampaign";

const Donators = ({ donators }) => {
    return (
        <div>
            <Heading
                title="Donators"
            />
            <List
                donators={donators}
            />
        </div>
    );
}

export default Donators
