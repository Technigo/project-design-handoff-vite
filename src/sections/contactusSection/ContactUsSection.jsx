import { useTranslation } from "react-i18next";
import "./contactus.css";
import wave3 from "../../assets/wave-3.svg";

export const ContactUsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">{t("contactUs")}</h2>
      <p className="contact-us-info">{t("contactUsInfo")}</p>

      <form>
        <div className="nameInput">
          <label>{t("formName")}</label>
          <input type="text" required placeholder={t("formNamePlaceholder")} />
        </div>
        <div className="emailInput">
          <label>{t("formEmail")}</label>
          <input
            type="email"
            required
            placeholder={t("formEmailPlaceholder")}
          />
        </div>
        <div className="messageInput">
          <label>{t("formMessage")}</label>
          <input
            type="text"
            required
            placeholder={t("formMessagePlaceholder")}
          />
        </div>
        <div className="terms-and-conditions">
          <input type="checkbox" />
          <p className="terms-and-conditions-info">{t("termsAndConditions")}</p>
        </div>
        <button type="submit">{t("sendBtn")}</button>
      </form>
      <img src={wave3} alt="wave pattern" />
    </div>
  );
};
