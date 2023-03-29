import React from 'react'
import {loader} from "../../../../assets";
import Image from "../../../atoms/image/loader/Image";
import {Paragraph} from "../../../atoms/paragraph/loader";

const Loader = ({ isLoading }) => {
    return (
        isLoading && (
            <img
                src={loader}
                alt="loader"
                className="w-[100px] h-[100px] object-contain"
            />
        )
    );
}

export default Loader
