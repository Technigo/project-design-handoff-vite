/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const GymContext = createContext()

export const GymProvider = ({children}) => {
    const [bgColor, setBgColor] = useState('bg-pink')
    const [fontColor, setFontColor] = useState ('text-black')

    const clickCard = () => {
        setBgColor('bg-purple')
        setFontColor('text-pink')
    }
    
    return (
        <GymContext.Provider value={{bgColor,fontColor, clickCard}}
        > {children}
        </GymContext.Provider>
    )
}
export const useGym = () => useContext(GymContext)