import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sepolia } from "@thirdweb-dev/chains";
import { BrowserRouter as Router} from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import {StateContextProvider} from "./context/contract";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={Sepolia}>
        <Router>
            <StateContextProvider>
                <App/>
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)