import { useState, useEffect } from "react";

export const Membership = () => {
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
    <div className="membership">
      {/* compare the width to the breakpoint to conditionally render the relevant component */}
      {width < breakPointDesktop ? (
        <div className="sign-up-button">
          <button type="button" className="sign-up">Sign up for membership</button>
        </div>
      ) : (
        <>
          <div className="membership-text">
            <h1>Sign up for a membership to unlock your full potential</h1>
            <h2>get workout plans tailored to you</h2>
            <h2>unlimited access to library</h2>
            <h2>access to live trainers</h2>
          </div>
          <div className="sign-up-button">
            <button type="button" className="sign-up">Sign up for membership</button>
          </div>
          <img src="src/assets/images/membership.png" alt="a woman tying her shoe" />
        </>
      )}
    </div>
  )
}
