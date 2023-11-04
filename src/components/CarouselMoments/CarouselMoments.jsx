// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "./CarouselMoments.css";

// import swipe1Image from "../../assets/images/swipe-1.png";
// import swipe2Image from "../../assets/images/swipe-2.png";
// import swipe3Image from "../../assets/images/swipe-3.png";
// import swipe4Image from "../../assets/images/swipe-4.png";
// import swipe5Image from "../../assets/images/swipe-5.png";
// import swipe6Image from "../../assets/images/swipe-6.png";
// import swipe7Image from "../../assets/images/swipe-7.png";
// import swipe8Image from "../../assets/images/swipe-8.png";
// import swipe9Image from "../../assets/images/swipe-9.png";
// import swipe10Image from "../../assets/images/swipe-10.png";
// import swipe11Image from "../../assets/images/swipe-11.png";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/bundle";

// export const CarouselMoments = () => {
//   return (
//     <Swiper
//       className="swiper-wrapper"
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={60}
//       slidesPerView={2}
//       centeredSlides={true}
//       navigation
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}>
//       <SwiperSlide>
//         <img src={swipe1Image} alt="women sitting in yoga class" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={swipe2Image} alt="women holding hands" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={swipe3Image} alt="woman doing yoga in sunset" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={swipe4Image} alt="woman jumping in sunset" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img
//           src={swipe5Image}
//           alt="woman in yoga position in a big empty rum"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={swipe6Image} alt="woman sitting in yoga position" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={swipe7Image} alt="hand i yoga position" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={swipe8Image} alt="women in yoga position" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={swipe9Image} alt="flowers" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img
//           src={swipe10Image}
//           alt="woman sitting in yoga position in nature"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img
//           src={swipe11Image}
//           alt="woman sitting in yoga position in nature"
//         />
//       </SwiperSlide>
//       ...
//     </Swiper>
//   );
// };

import { useState } from "react";
import "./CarouselMoments.css"; // Assume we have a separate CSS file for styles

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

// export const CarouselMoments = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const updateIndex = (newIndex) => {
//     if (newIndex < 0) {
//       newIndex = images.length - 1;
//     } else if (newIndex >= images.length) {
//       newIndex = 0;
//     }

//     setActiveIndex(newIndex);
//   };

//   return (
//     <div className="carousel">
//       <div
//         className="carousel-inner"
//         style={{
//           transform: `translateX(-${
//             activeIndex * (100 + 15 / images.length)
//           }%)`,
//         }}>
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Swipe ${index + 1}`}
//             className="carousel-item"
//           />
//         ))}
//       </div>
//       <button
//         onClick={() => updateIndex(activeIndex - 1)}
//         className="carousel-control prev">
//         &#10094;
//       </button>
//       <button
//         onClick={() => updateIndex(activeIndex + 1)}
//         className="carousel-control next">
//         &#10095;
//       </button>
//     </div>
//   );
// };
export const CarouselMoments = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideWidth = 100; // Assuming each slide should take close to full width of the container
  const slideMarginRight = 24; // This should match the CSS margin-right value for .carousel-item

  const updateIndex = (newIndex) => {
    if (newIndex < 0 || newIndex >= images.length) {
      // Do nothing if it's out of bounds
      return;
    }
    setActiveIndex(newIndex);
  };

  // Adjust the CSS transform based on the current index
  const getTransform = () => {
    let offset = activeIndex * (slideWidth + slideMarginRight);
    if (activeIndex === images.length - 1) {
      offset -= slideMarginRight; // Remove the margin for the last item
    }
    return `translateX(-${offset}%)`;
  };

  return (
    <div className="carousel">
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
        &#10094;
      </button>
      <button
        onClick={() => updateIndex(activeIndex + 1)}
        className="carousel-control next"
        disabled={activeIndex === images.length - 1}>
        &#10095;
      </button>
    </div>
  );
};
