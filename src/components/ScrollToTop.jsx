//Component that makes the page automatically scroll to the top when user clicks links that changes pathname
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Get the current 'pathname' from the location object
export const ScrollToTop = () => {
    const { pathname } = useLocation();

    // Use the 'useEffect' hook to run a function when 'pathname' changes
    useEffect(() => {
         // Scroll the window to the top (0 pixels horizontally and 0 pixels vertically)
        window.scrollTo(0, 0);
    }, [pathname]); // The effect only runs when 'pathname' changes

     // This component doesn't render any visible content, so return null
    return null;
}