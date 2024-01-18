// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MemberSwiperCard } from "../../components/MemberSwiperCardFolder/MemberSwiperCard";
import "./MemberSwiper.css";
import CardOne from "../../assets/images/card1.png";
import CardTwo from "../../assets/images/card2.png";
import CardTree from "../../assets/images/card3.png";
import CardFour from "../../assets/images/card4.png";
import { useTranslation } from "react-i18next";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MemberSwiper = () => {
  const { t } = useTranslation();
  return (
    <div className="swiper-box">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 320px
          744: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <MemberSwiperCard
            img={CardOne}
            cardText={t("MemberSwiperCard.cardText")}
            cardAuthor={t("MemberSwiperCard.cardAuthor")}
          />
        </SwiperSlide>
        <SwiperSlide className="blue">
          <MemberSwiperCard
            img={CardTwo}
            cardText={t("MemberSwiperCard.cardText2")}
            cardAuthor={t("MemberSwiperCard.cardAuthor2")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MemberSwiperCard
            img={CardTree}
            cardText={t("MemberSwiperCard.cardText3")}
            cardAuthor={t("MemberSwiperCard.cardAuthor3")}
          />
        </SwiperSlide>
        <SwiperSlide className="blue">
          <MemberSwiperCard
            img={CardFour}
            cardText={t("MemberSwiperCard.cardText4")}
            cardAuthor={t("MemberSwiperCard.cardAuthor4")}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
