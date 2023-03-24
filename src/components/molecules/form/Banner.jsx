import React from 'react'
import { Heading } from "../../atoms/heading/form";
import {money} from "../../../assets";

const Banner = () => {
    return (
        <div className="w-full flex justify-start items-center p-4 bg-lavender h-[120px] rounded-[10px]">
            <img src={ money } alt="money" className="w-[40px] h-[40px] object-contain"/>
            <Heading/>
        </div>
    );
}
export default Banner
