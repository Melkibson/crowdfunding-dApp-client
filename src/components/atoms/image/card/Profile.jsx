import React from 'react'
import { thirdweb } from "../../../../assets";

const Profile = () => {
    return (
        <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img src={thirdweb} alt="user" className="w-1/2 h-1/2 object-contain"/>
        </div>
    );
}

export default Profile
