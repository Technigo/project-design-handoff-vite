// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MemberSwiperCard } from "../../components/MemberSwiperCardFolder/MemberSwiperCard";
import "./MemberSwiper.css";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MemberSwiper = ({ cardOne, cardTwo }) => {
  return (
    <div className="swiper-box">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <MemberSwiperCard cardOne={cardOne} />
        </SwiperSlide>
        <SwiperSlide>
          <MemberSwiperCard cardTwo={cardTwo} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
