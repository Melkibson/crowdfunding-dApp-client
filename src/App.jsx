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
        </Routes>
    );
}

export default App;
