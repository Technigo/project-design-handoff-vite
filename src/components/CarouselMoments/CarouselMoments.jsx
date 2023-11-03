import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CarouselMoments.css";

//Import alla bilder
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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

export const CarouselMoments = () => {
  return (
    <Swiper
      // install Swiper modules
      className="swiper-wrapper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={60}
      slidesPerView={2}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}>
      <SwiperSlide>
        <img src={swipe1Image} alt="women sitting in yoga class" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swipe2Image} alt="women holding hands" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swipe3Image} alt="woman doing yoga in sunset" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swipe4Image} alt="woman jumping in sunset" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={swipe5Image}
          alt="woman in yoga position in a big empty rum"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swipe6Image} alt="woman sitting in yoga position" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swipe7Image} alt="hand i yoga position" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swipe8Image} alt="women in yoga position" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={swipe9Image} alt="flowers" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={swipe10Image}
          alt="woman sitting in yoga position in nature"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={swipe11Image}
          alt="woman sitting in yoga position in nature"
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
