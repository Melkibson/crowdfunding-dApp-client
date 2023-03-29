import React from 'react'

import {Heading as CardHeading} from "../../../atoms/heading/card/info";
import {Table} from "../../../molecules/card/table";
import {Paragraph} from "../../../atoms/paragraph/detail/description";

const Card = (props) => {
   return ( <div className="container mx-auto ">
        <CardHeading
            content={props.title}
        />
        <div className="mt-3 flex flex-col font-epilogue border border-gray-600 table-auto w-full rounded-[10px] ">
            <div className="p-5 border-gray-600 flex flex-col sm:flex-row justify-between items-center">
                <Table
                    title="Amount collected"
                    content={`${props.amountCollected} / ${props.target} ETH`}
                />
                <Table
                    title="Days left"
                    content={props.deadline}
                />
                <Paragraph content={props.status} styles={`prose-sm ${props.status === 'Active' ? 'text-green' : 'text-red-500'}`}/>
            </div>
        </div>
    </div>
    );
}

export default Card
