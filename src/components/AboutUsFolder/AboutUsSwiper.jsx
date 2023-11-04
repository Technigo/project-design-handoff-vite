/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./AboutUsSwiper.css";

import scrollOne from "../../assets/images/scroll1.png";
import scrollTwo from "../../assets/images/scroll2.png";
import scrollThree from "../../assets/images/scroll3.png";
import scrollFour from "../../assets/images/scroll4.png";
import scrollFive from "../../assets/images/scroll5.png";
import scrollSix from "../../assets/images/scroll6.png";
import scrollSeven from "../../assets/images/scroll7.png";
import scrollEight from "../../assets/images/scroll8.png";
import scrollNine from "../../assets/images/scroll9.png";
import scrollTen from "../../assets/images/scroll10.png";
import scrollEleven from "../../assets/images/scroll11.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const AboutUsSwiper = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={scrollOne} alt="scroll img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={scrollTwo} alt="scroll img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={scrollThree} alt="scroll img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={scrollFour} alt="scroll img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={scrollFive} alt="scroll img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={scrollSix} alt="scroll img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={scrollSeven} alt="scroll img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={scrollEight} alt="scroll img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={scrollNine} alt="scroll img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={scrollTen} alt="scroll img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={scrollEleven} alt="scroll img" />
      </SwiperSlide>
    </Swiper>
  );
};

export const SwiperText = () => {
  return (
    <div className="swiper-text">
      <p>
        “It's amazing to think that a fitness center can be so much more than
        just exercise.”
      </p>
    </div>
  );
};
