import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// A functional component responsible for scrolling to the top of the page.
export const ScrollToTop = () => {
  // Get the current pathname from the URL using the useLocation hook.
  const { pathname } = useLocation();

  // Use the useEffect hook to execute the following code after the component is mounted.
  useEffect(() => {
    // Scroll the window to the top (0 pixels from the top) whenever the pathname changes.
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything in the DOM, so it returns null.
  return null;
};
