import { SectionTitle } from "../../../../components/reusable/SectionTitle";
import "./Testimonials.css";
import { useTranslation } from "react-i18next";

export const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials">
      <div className="page-wrapper">
        <SectionTitle
          className="testimonial-title"
          title={t("homePage.testimonials.title")}
        />
        <div className="testimonials-container">
          <div className="single-testimonial">
            <p>{t("homePage.testimonials.testimonial1.text")}</p>
            <span className="customer-name">
              {t("homePage.testimonials.testimonial1.customer")}
            </span>
          </div>
          <div className="single-testimonial">
            <p>{t("homePage.testimonials.testimonial2.text")}</p>
            <span className="customer-name">
              {t("homePage.testimonials.testimonial2.customer")}
            </span>
          </div>
          <div className="single-testimonial">
            <p>{t("homePage.testimonials.testimonial3.text")}</p>
            <span className="customer-name">
              {t("homePage.testimonials.testimonial3.customer")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
