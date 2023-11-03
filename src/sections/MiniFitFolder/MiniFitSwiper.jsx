// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MiniFitSwiperCard } from "../../components/MiniFitSwiperCardFolder/MiniFitSwiperCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MiniFitSwiper = ({ miniCardOne }) => {
  return (
    <>
      <h3>What is MiniFit?</h3>

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
          <MiniFitSwiperCard miniCardOne={miniCardOne} />
        </SwiperSlide>
        <SwiperSlide>
          <MiniFitSwiperCard miniCardOne={miniCardOne} />
        </SwiperSlide>
        <SwiperSlide>
          <MiniFitSwiperCard miniCardOne={miniCardOne} />
        </SwiperSlide>
        <SwiperSlide>
          <MiniFitSwiperCard miniCardOne={miniCardOne} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

// import { useTranslation } from "react-i18next";
// import { MiniFitSwiperCard } from "../../components/MiniFitSwiperCardFolder/MiniFitSwiperCard";

// export const MiniFitSwiper = ({ miniCardOne }) => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <h3>{t("MiniFitSwiper.heading")}</h3>

//       <Swiper
//         // ... (other configuration options)
//       >
//         <SwiperSlide>
//           <MiniFitSwiperCard miniCardOne={miniCardOne} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <MiniFitSwiperCard miniCardOne={miniCardOne} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <MiniFitSwiperCard miniCardOne={miniCardOne} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <MiniFitSwiperCard miniCardOne={miniCardOne} />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// };
