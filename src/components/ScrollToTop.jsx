// Mounted in App.jsx
//Component to make the change of page to always start at the top using useEffect

//Importing necessary hooks from React
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ScrollToTop = () => {
    // Extracting the 'pathname' from the current location using useLocation hook
    const { pathname } = useLocation()

    // Using the useEffect hook to manage side effects when "pathname" changes and scrolls to the top of the window whenever "pathname" changes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    // Return null as this component doesn't render anything
    return null
}