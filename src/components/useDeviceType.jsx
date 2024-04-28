import { useEffect, useState } from "react";

export const useDeviceType = () => {
    const [screen, setScreen] = useState("desktop")

    useEffect(()=> {
        const handleResize = () => {
            const width = window.innerWidth

            if(width <320) {
                setScreen("none")
            } else if (width >=320 && width <= 744) {
                setScreen ("mobile")
            } else if (width <= 1440){
                setScreen ("tablet")
            } else {setScreen("desktop")}
        }
        window.addEventListener("resize", handleResize);
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
    }, [])
    return screen
}