import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import "./ContactWelcome.css";

export const ContactWelcome = () => {
    const { t } = useTranslation();

    const scrollToContact = () => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
          contactSection.scrollIntoView({ behaviour: "smooth"});
      }
  };

    return (
        <section className="welcome-section">
            <img
                src={t("about.welcome.welcomeImage")}
                alt={t("about.welcome.welcomeImageAlt")}
            />
            <div className="welcome-content-wrapper">
                <h2>{t("about.welcome.heading")}</h2>
                <h3>{t("about.welcome.subHeading")}</h3>
                <Button onClick={scrollToContact}>{t("about.welcome.button")}</Button>
            </div>
        </section>
    );
};
