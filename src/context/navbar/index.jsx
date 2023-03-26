import React, {useContext, useState} from 'react'
import { createContext } from "react";
import {useNavigate} from "react-router-dom";

const StateContext = createContext();

export const NavStateContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');
    const [toggle, setToggle] = useState(false);

    return(
        <StateContext.Provider
            value={{ navigate, isActive, toggle, setToggle, setIsActive }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const  useNavStateContext = () => useContext(StateContext);