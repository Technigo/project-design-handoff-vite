import { useState, useEffect } from "react";
import { NavBarMobile } from "../Components/NavBarMobile";
import { NavBarDesktop } from "../Components/NavBarDesktop";

export const Header = () => {
  {/* conditionally display header for desktop depending the screen size */}
  const [width, setWidth] = useState(window.innerWidth);
  const breakPointDesktop = 1440;

  useEffect(() => {
    // Set the width to the inner width of the window 
    const handleWindowResize = () => setWidth(window.innerWidth);
    // If the user resizes the screen, the event listener will be triggered, the function will be called to set the width to the new innerWidth of the window
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize)
  }, []) // the effect only runs once when the user resizes the screen width

  return (
    <>
      {/* compare the width to the breakpoint to conditionally render the relevant component */}
      {width < breakPointDesktop ? (
        <div className="header-mobile">
          <NavBarMobile />
        </div>
      ) : (
        <div className="header-tablet-desktop">
          <NavBarDesktop />
        </div>
      )}      
    </>
  )
}
