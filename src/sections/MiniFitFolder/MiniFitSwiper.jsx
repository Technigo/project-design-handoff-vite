// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MiniFitSwiperCard } from "../../components/MiniFitSwiperCardFolder/MiniFitSwiperCard";
import "./MiniFitSwiper.css";
import MiniCardOne from "../../assets/images/miniCard1.png";
import MiniCardTwo from "../../assets/images/miniCard2.png";
import MiniCardThree from "../../assets/images/miniCard3.png";
import MiniCardFour from "../../assets/images/minicard4.png";
import MiniCardFive from "../../assets/images/minicard5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MiniFitSwiper = () => {
  return (
    <>
      <div className="minifit-swiper-container">
        <h3>What is MiniFit?</h3>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <MiniFitSwiperCard
              img={MiniCardOne}
              // miniCard={miniCard}
              cardTitle="Friends"
              buttonText="Learn more"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MiniFitSwiperCard
              img={MiniCardTwo}
              // miniCard={miniCard}
              cardTitle="Learning"
              buttonText="Learn more"
            />
          </SwiperSlide>

          <SwiperSlide>
            <MiniFitSwiperCard
              img={MiniCardThree}
              // miniCard={miniCard}
              cardTitle="Learning"
              buttonText="Learn more"
            />
          </SwiperSlide>

          <SwiperSlide>
            <MiniFitSwiperCard
              img={MiniCardFour}
              // miniCard={miniCard}
              cardTitle="Learning"
              buttonText="Learn more"
            />
          </SwiperSlide>

          <SwiperSlide>
            <MiniFitSwiperCard
              img={MiniCardFive}
              // miniCard={miniCard}
              cardTitle="Learning"
              buttonText="Learn more"
            />
          </SwiperSlide>
        </Swiper>
      </div>
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
