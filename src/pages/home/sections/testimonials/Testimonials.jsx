import { SectionTitle } from "../../../../components/reusable/SectionTitle";
import { TestimonialCard } from "./TestimonialCard";
import "./Testimonials.css";
import { useTranslation } from "react-i18next";

export const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id="testimonials">
      <div className="page-wrapper">
        <SectionTitle className="testimonial-title" title={t("homePage.testimonials.title")} />
        <TestimonialCard />
      </div>
    </section>
  );
};
