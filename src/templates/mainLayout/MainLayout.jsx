import React from 'react'
import { Sidebar } from "../../components/organisms/Sidebar";
import { Navbar } from "../../components/organisms/Navbar";
import {NavStateContextProvider} from "../../context/navbar";
import {CampaignStateContextProvider} from "../../context/campaigns";
const MainLayout = ({ children }) => {
    return (
        <CampaignStateContextProvider>
            <div className="relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
                <div className="md:flex hidden mr-10 relative">
                    <Sidebar/>
                </div>
                <div className="flex-1 mac-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
                    <NavStateContextProvider>
                        <Navbar/>
                    </NavStateContextProvider>
                    {children}
                </div>
            </div>
        </CampaignStateContextProvider>

    );
}

export default MainLayout
