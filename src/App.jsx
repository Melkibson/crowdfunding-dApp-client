import React from 'react';
import './index.css'
import {Route, Routes} from 'react-router-dom'
import MainLayout from "./templates/mainLayout/MainLayout";

import {Campaign, CreateCampaign, Profile, Home} from "./pages";
import PaymentHistory from "./pages/PaymentHistory";
import {CampaignStateContextProvider} from "./context/campaigns";

function App() {
    return (
        <Routes>
            <Route path="/" element={
                <MainLayout>
                    <Home />
                </MainLayout>
            } />
            <Route path="/create-campaign" element={
                <MainLayout>
                    <CreateCampaign/>
                </MainLayout>
            }/>
            <Route path="/profile" element={
                <CampaignStateContextProvider>
                    <MainLayout>
                        <Profile/>
                    </MainLayout>
                </CampaignStateContextProvider>
            }/>
            <Route path="/campaign-details/:id" element={
                <MainLayout>
                    <Campaign/>
                </MainLayout>
            }/>
            <Route path="/payment" element={
                <CampaignStateContextProvider>
                    <MainLayout>
                        <PaymentHistory/>
                    </MainLayout>
                </CampaignStateContextProvider>
            }/>
        </Routes>
    );
}

export default App;
