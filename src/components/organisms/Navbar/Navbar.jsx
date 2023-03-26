import React from 'react'
import { Link } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";

import { Button } from "../../atoms/button";
import { thirdweb } from '../../../assets'
import { SearchBar } from "../../molecules/searchBar";
import { NavbarMobile } from "./index";

import { useStateContext } from "../../../context/contract";
import { useNavStateContext } from "../../../context/navbar";

const Navbar = () => {

    const { navigate, isActive, toggle, setToggle, setIsActive } = useNavStateContext()
    const { address } = useStateContext()
    return (
        <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
            <SearchBar/>
            <div className="md:flex hidden flex-row justify-end gap-4">
                <div className="flex gap-4 flex-col lg:flex-row">
                    <ConnectWallet
                        className="font-epilogue font-semibold prose-base leading-[26px]
                text-white min-h-[52px] px-4 rounded-[10px] bg-green"
                    />
                    {address && (
                        <Button
                            btnType="button"
                            title="Create a campaign"
                            handleClick={() => navigate('create-campaign')}
                        />)}
                </div>

                <Link className="flex items-center justify-center lg:justify-items-start">
                    <div className="w-[52px] h-[52px] rounded-full bg-gray-700 flex justify-center items-center cursor-pointer">
                        <img src={thirdweb} alt="user"
                             className="w-[60%] h-[60%] object-contain"/>
                    </div>
                </Link>
            </div>
            <NavbarMobile
                toggle={toggle}
                setToggle={setToggle}
                isActive={isActive}
                setIsActive={setIsActive}
                navigate={navigate}
            />
        </div>
    );
}

export default Navbar
