/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const GymContext = createContext()

export const GymProvider = ({children}) => {
    const [isClick, setClick] = useState ('white')
 

    const clickCard = () => {
        setClick (isClick === 'white' ? 'pink' : 'white')
    }
    
    return (
        <GymContext.Provider value={{isClick, clickCard}}
        > {children}
        </GymContext.Provider>
    )
}
export const useGym = () => useContext(GymContext)