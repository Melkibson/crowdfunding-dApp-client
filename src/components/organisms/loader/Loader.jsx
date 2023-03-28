import React from 'react'
import {loader} from "../../../assets";
import Image from "../../atoms/image/loader/Image";
import {Paragraph} from "../../atoms/paragraph/loader";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-10 h-screen bg-gray-800 flex items-center justify-center flex ">
            <Image
                src={loader}
                alt="loader"
            />
            <Paragraph
                content={`Transaction is in progress please wait...`}
            />
        </div>
    );
}

export default Loader
