import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../atoms/button";
import { logo, menu, thirdweb } from '../../../assets'
import { navlinks } from '../../../constants'
import { SearchBar } from "../../molecules/searchBar";

const Navbar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');
    const [toggle, setToggle] = useState(false);

    return (
        <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
            <SearchBar/>
        </div>
    );
}

export default Navbar
