import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPointTablet = 834;

  useEffect(() => {
    // Set the width to the inner width of the window 
    const handleWindowResize = () => setWidth(window.innerWidth);
    // If the user resizes the screen, the event listener will be triggered, the function will be called to set the width to the new innerWidth of the window
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize)
  }, []) // the effect only runs once when the user resizes the screen width

  return (
    // conditionally display either text or both image and text depending on the screen size
    <div className="hero-section">
      {width < breakPointTablet ? (
        <div className="hero-text">
          <h1>At home fitness</h1>
          <h4>Helping you move in your comfort zone</h4>
        </div>
      ) : (
        <>
          <div className="hero-text">
            <h1>At home fitness</h1>
            <h4>Helping you move in your comfort zone</h4>
          </div>
          <img src="src/assets/images/hero-image.png" alt="a woman stretching her leg" />
        </>  
      )}      
    </div>
  )
}
