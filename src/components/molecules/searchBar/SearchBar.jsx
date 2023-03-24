import React from 'react'
import { Input } from "../../atoms/input";
import { Icon } from "../../atoms/icon/search";

const SearchBar = () => {
    return (
        <div className="lg:flex-1 flex flex-rox max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-gray-800 rounded-[100px]">
            <Input/>
            <Icon/>
        </div>

    );
}
export default SearchBar
