import React from 'react'
import { thirdweb } from "../../../../assets";

const Profile = () => {
    return (
        <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain"/>
        </div>
    );
}

export default Profile
