import { useState } from "react";
import "./CarouselMoments.css";
import prevImage from "../../assets/prev-btn.svg";
import nextImage from "../../assets/next-btn.svg";
// Importing the images
import swipe1Image from "../../assets/images/swipe-1.png";
import swipe2Image from "../../assets/images/swipe-2.png";
import swipe3Image from "../../assets/images/swipe-3.png";
import swipe4Image from "../../assets/images/swipe-4.png";
import swipe5Image from "../../assets/images/swipe-5.png";
import swipe6Image from "../../assets/images/swipe-6.png";
import swipe7Image from "../../assets/images/swipe-7.png";
import swipe8Image from "../../assets/images/swipe-8.png";
import swipe9Image from "../../assets/images/swipe-9.png";
import swipe10Image from "../../assets/images/swipe-10.png";
import swipe11Image from "../../assets/images/swipe-11.png";

const images = [
  swipe1Image,
  swipe2Image,
  swipe3Image,
  swipe4Image,
  swipe5Image,
  swipe6Image,
  swipe7Image,
  swipe8Image,
  swipe9Image,
  swipe10Image,
  swipe11Image,
];

export const CarouselMoments = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideWidth = 100;
  const slideMarginRight = 24;

  const updateIndex = (newIndex) => {
    if (newIndex < 0 || newIndex >= images.length) {
      return;
    }
    setActiveIndex(newIndex);
  };

  // Adjust the CSS transform based on the current index
  const getTransform = () => {
    let offset = activeIndex * (slideWidth + slideMarginRight);
    if (activeIndex === images.length - 1) {
      offset -= slideMarginRight;
    }
    return `translateX(-${offset}%)`;
  };

  return (
    <div className="carousel">
      <div>
        <h1 className="carousel-title">Captured Moments</h1>
      </div>
      <div className="carousel-inner" style={{ transform: getTransform() }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Swipe ${index + 1}`}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <button
        onClick={() => updateIndex(activeIndex - 1)}
        className="carousel-control prev"
        disabled={activeIndex === 0}>
        <img src={prevImage} alt="previuos button" className="prev-btn" />
      </button>
      <button
        onClick={() => updateIndex(activeIndex + 1)}
        className="carousel-control next"
        disabled={activeIndex === images.length - 1}>
        <img src={nextImage} alt="next button" className="next-btn" />
      </button>
    </div>
  );
};
