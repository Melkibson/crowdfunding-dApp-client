import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../atoms/button/custom";
import { logo, menu, thirdweb } from '../../../assets'
import { navlinks } from '../../../constants'
import { SearchBar } from "../../molecules/searchBar";

const Navbar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');
    const [toggle, setToggle] = useState(false);

    const address = '0xabcdef'

    return (
        <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
            <SearchBar/>
            <div className="sm:flex hidden flex-row justify-end gap-4">
                <Button
                    btnType="button"
                    title={address ? 'Create a campaign' : 'Connect'}
                    styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
                    handleClick={() => address ? navigate('create-campaign') : 'connect()'}
                />
                <Link>
                    <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                        <img src={thirdweb} alt="user"
                             className="w-[60%] h-[60%] object-contain"/>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar
