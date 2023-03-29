import React from 'react'
import Paragraph from "../../../../atoms/paragraph/detail/description/Paragraph";

const List = ({ donators }) => {

    return (
        <div className="mt-[20px] flex flex-col gap-4 ">
            {donators.length > 0 ? donators.map((item, index) => {
                return (

                <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
                    <Paragraph
                        content={item.donator}
                        styles='break-all'
                    />
                    <Paragraph
                        content={item.amount}
                        styles='break-all'
                    />
                </div>
            )}) : (
                <Paragraph
                    content="No donators yet. Be the first one!"
                    styles="text-orange-400 text-justify"
                />             )}
        </div>
    );
}

export default List
