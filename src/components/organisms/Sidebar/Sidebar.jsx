import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

import { logo, sun } from '../../../assets'
import { navlinks } from '../../../constants'
import { Icon } from "../../atoms/icon/sidebar";


const Sidebar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');
    return (
        <div className="flex justify-between items-center flex-col sticky top-5 h-[70vh]">
            <Link to={'/'}>
                <Icon
                    styles="w-[52px] h-[52px] bg-gray-700"
                    imgUrl={logo}
                />
            </Link>
            <div className="flex-1 flex flex-col justify-between items-center bg-gray-800 rounded-[20px] w-[76px] py-4 mt-12">
                <div className="flex flex-col justify-center items-center gap-3">
                    {navlinks.map(link => (
                        <Icon
                            key={link.name}
                            {...link}
                            isActive={isActive}
                            handleClick={() =>{
                                if(!link.disabled){
                                    setIsActive(link.name);
                                    navigate(link.link);
                                }
                            }}
                        />
                    ))}
                </div>
                <Icon
                    styles="bg-gray-800 shadow-secondary"
                    imgUrl={sun}
                />
            </div>
        </div>
    );
}

export default Sidebar
