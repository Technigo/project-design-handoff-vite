import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Component that scrolls to the top of the page when a new page is loaded
export const ScrollToTop = () => {
    const { pathname } = useLocation();

    // Scrolls to the top of the page when a new page is loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Returns null to avoid rendering anything
    return null;
}