import { SectionTitle } from "../../../../components/reusable/SectionTitle";
import { useTranslation } from "react-i18next";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./Testimonials.css";

export const Testimonials = () => {
  const { t } = useTranslation();

  const swiperConfig = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 24,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: "#nav-right",
      prevEl: "#nav-left",
    },
  };

  // Update the swiper configuration for tablet view
  if (window.innerWidth >= 600) {
    swiperConfig.slidesPerView = 2;
  }
  // Update the swiper configuration for desktop view
  if (window.innerWidth >= 1024) {
    swiperConfig.slidesPerView = 3;
    swiperConfig.centeredSlides = false;
  }

  new Swiper(".swiper", swiperConfig);

  return (
    <section id="testimonials">
      <div className="page-wrapper">
        <SectionTitle
          className="testimonial-title"
          title={t("homePage.testimonials.title")}
        />
        <div className="swiper-custom-nav">
          <RiArrowLeftSLine id="nav-left" className="swiper-icon" />
          <RiArrowRightSLine id="nav-right" className="swiper-icon" />
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="single-testimonial">
                <p>{t("homePage.testimonials.testimonial1.text")}</p>
                <br />
                <span className="customer-name">
                  {t("homePage.testimonials.testimonial1.customer")}
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-testimonial">
                <p>{t("homePage.testimonials.testimonial2.text")}</p>
                <br />
                <span className="customer-name">
                  {t("homePage.testimonials.testimonial2.customer")}
                </span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="single-testimonial">
                <p>{t("homePage.testimonials.testimonial3.text")}</p>
                <br />
                <span className="customer-name">
                  {t("homePage.testimonials.testimonial3.customer")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
