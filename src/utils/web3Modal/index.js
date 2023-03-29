import Web3Modal from "web3modal";
import { ethers } from "ethers";

export const web3Modal = new Web3Modal({
    network: "sepolia",
    cacheProvider: true,
    providerOptions: {
        injected: {
            display: {
                name: "Injected",
                description: "Connect to your wallet using Metamask or other provider",
            },
            package: null,
            connector: async () => {
                if(!window.ethereum) {
                    ethers.getDefaultProvider()
                }
                await window.ethereum.request({ method: "eth_requestAccounts" });
                return window.ethereum;
            }
        }
    }
});