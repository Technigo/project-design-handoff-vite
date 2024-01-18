// Import Swiper React components
import { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MiniFitSwiperCard } from "../../components/MiniFitSwiperCardFolder/MiniFitSwiperCard";
import "./MiniFitSwiper.css";
import MiniCardOne from "../../assets/images/miniCard1.png";
import MiniCardTwo from "../../assets/images/miniCard2.png";
import MiniCardThree from "../../assets/images/miniCard3.png";
import MiniCardFour from "../../assets/images/minicard4.png";
import MiniCardFive from "../../assets/images/minicard5.png";
import MiniCardsix from "../../assets/images/minicard6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MiniFitSwiper = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;

  return (
    <>
      <div className="minifit-swiper-container">
        <h3>What is MiniFit?</h3>

        {isDesktop ? (
          <div className="minifit-grid-container">
            {/* Grid layout for desktop */}
            <MiniFitSwiperCard
              img={MiniCardOne}
              // miniCard={miniCard}
              cardTitle="Friends"
              buttonText="Learn more"
            />
            <MiniFitSwiperCard
              img={MiniCardTwo}
              // miniCard={miniCard}
              cardTitle="Learning"
              buttonText="Learn more"
            />
            {/* Repeat for other cards */}
            <MiniFitSwiperCard
              img={MiniCardThree}
              // miniCard={miniCard}
              cardTitle="Exploring"
              buttonText="Learn more"
            />
            <MiniFitSwiperCard
              img={MiniCardFour}
              // miniCard={miniCard}
              cardTitle="Safety"
              buttonText="Learn more"
            />
            <MiniFitSwiperCard
              img={MiniCardFive}
              // miniCard={miniCard}
              cardTitle="Activity"
              buttonText="Learn more"
            />
            <MiniFitSwiperCard
              img={MiniCardsix}
              // miniCard={miniCard}
              cardTitle="Age Groups"
              buttonText="Learn more"
            />
          </div>
        ) : (
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            // navigation
            // pagination={{ clickable: true }}
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
        )}
      </div>
    </>
  );
};
