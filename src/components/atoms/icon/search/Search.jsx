import React from 'react'
import { search } from "../../../../assets";

const Search = () => {
    return (
        <div className="w-[72px] h-full rounded-[20px] bg-lightGreen flex justify-center items-center cursor-pointer">
            <img src={search} alt="search"
                 className="w-[15px] h-[15px] object-contain"
            />
        </div>
    );
}

export default Search
