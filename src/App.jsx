import React from 'react';
import './index.css'
import {Route, Routes} from 'react-router-dom'
import MainLayout from "./templates/mainLayout/MainLayout";

import {Campaign, CreateCampaign, Profile, Home} from "./pages";

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
                <MainLayout>
                    <Profile/>
                </MainLayout>
            }/>
            <Route path="/campaign-details/:id" element={
                <MainLayout>
                    <Campaign/>
                </MainLayout>
            }/>
        </Routes>
    );
}

export default App;
