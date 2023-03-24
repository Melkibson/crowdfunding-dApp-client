import React from 'react'
import {menu, thirdweb} from "../../../assets";
import {navlinks} from "../../../constants";
import {Button} from "../../atoms/button/custom";
const address = '0xabcdef'

const NavbarMobile = ({toggle, setToggle, isActive, setIsActive, navigate}) => {
    return (
        <div className="sm:hidden flex justify-between items-center relative">
            <div className="w-[40px] h-[40px] rounded-[10px] bg-gray-700 flex justify-center items-center cursor-pointer">
                <img src={thirdweb} alt="user"
                     className="w-[60%] h-[60%] object-contain"/>

            </div>
            <img src={menu} alt="menu"
                 className="w-[34px] h-[34px] object contain cursor-pointer"
                 onClick={() => setToggle(toggle => !toggle)}
            />
            <div className={`absolute top-[60px] right-0 left-0 bg-gray-800 z-10 shadow-secondary py-4
            ${!toggle  ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
                <ul className="mb-4">
                    {navlinks.map(link => (
                        <li
                            key={link.name}
                            className={`flex p-4 ${isActive === link.name  && 'bg-[#3a3a43]'}`}
                            onClick={() => {
                                setIsActive(link.name)
                                setToggle(false)
                                navigate(link.link)
                            }}
                        >
                            <img src={link.imgUrl} alt={link.name}
                            className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}/>
                            <span className={`ml-[20px] font-epilogue font-semibold prose prose-sm
                                ${isActive === link.name ? 'text-green' : 'text-gray-[600]'}`}>
                                {link.name}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="flex mx-4">
                    <Button
                        btnType="button"
                        title={address ? 'Create a campaign' : 'Connect'}
                        styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
                        handleClick={() => address ? navigate('create-campaign') : 'connect()'}
                    />
                </div>
            </div>
        </div>
    );
}

export default NavbarMobile
