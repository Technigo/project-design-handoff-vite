import { useRef, useEffect } from "react";
import "../header/slideshow.css"


const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png"
];

// export const Slideshow = () => {
//    const [currentIndex, setCurrentIndex] = useState(0);

//    useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); //change image every 3 seconds

//     //Clear interval on component unmount
//     return () => clearInterval(interval);
//    }, []);
  
//     return (
//         //infinite loop: overflow: hidden; 
//       <div>
//         {/* <img src={img1} alt="Image 1" /> */}
//         <img src={images[currentIndex]} alt="carousel" />
//       </div>
//       );
// };

export const Slideshow = () => {
  // Use useRef to directly access and manipulate the .slideshow-inner div
  const slideshowRef = useRef(null);

  // The effect hook runs when the component mounts
  useEffect(() => {
    // Reference to the .slideshow-inner div
    const slideshow = slideshowRef.current;

    // Function to start the sliding animation
    const startSlideAnimation = () => {
      // Move the slideshow to the left by -100% of its width
      slideshow.style.transition = 'transform 10s linear'; // Smooth animation over 10 seconds
      slideshow.style.transform = `translateX(-100%)`; // Slides the entire row of images to the left
    };

    // Event handler for when the animation completes
    const handleAnimationEnd = () => {
      // Reset position instantly without any animation
      slideshow.style.transition = 'none'; // Disables the transition
      slideshow.style.transform = 'translateX(0)'; // Moves the row back to the starting position
      
      // Wait a frame before starting the animation again
      // This creates a smooth loop effect
      requestAnimationFrame(() => {
        requestAnimationFrame(startSlideAnimation); // Restarts the slide
      });
    };

    // Start the initial animation
    startSlideAnimation();

    // Add an event listener to detect when the animation ends
    slideshow.addEventListener('transitionend', handleAnimationEnd);

    // Clean up event listener when the component unmounts
    return () => slideshow.removeEventListener('transitionend', handleAnimationEnd);
  }, []);

  return (
    <div className="slideshow">
      {/* The outer container (.slideshow) has overflow hidden so only part of the images are visible */}
      <div className="slideshow-inner" ref={slideshowRef}>
        {/* Render each image in the array */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="slide" />
        ))}
      </div>
    </div>
  );
};
