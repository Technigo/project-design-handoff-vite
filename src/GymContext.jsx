/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const GymContext = createContext()

export const GymProvider = ({children}) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    
    return (
        <GymContext.Provider value={{isClicked,handleClick}}
        > {children}
        </GymContext.Provider>
    )
}
export const useGym = () => useContext(GymContext)