import { useState, useEffect } from "react";
import { ReadMoreButton } from "./ReadMoreButton";

export const ArticleCard = ({ article }) => {
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
    <div className="artile-card">
      {/* compare the width to the breakpoint to conditionally render the relevant component */}
      {width < breakPointDesktop ? (
        <>
          <h2>{article.title}</h2>
          <img src={article.image} alt={article.imageDescription} />
          <ReadMoreButton />
        </>
      ) : (
        <>
          <h2>{article.title}</h2>
          <img src={article.image} alt={article.imageDescription} />
          <p>{article.text}</p>
          <ReadMoreButton />
      </>
      )}
    </div>
  )
}
