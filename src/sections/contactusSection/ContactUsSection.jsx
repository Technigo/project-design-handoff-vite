import { useTranslation } from "react-i18next";
import "./contactus.css";

import { PrimaryBtn } from "../../components/buttons/primary/PrimaryBtn";

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
          <textarea
            rows={4}
            required
            placeholder={t("formMessagePlaceholder")}
          />
        </div>
        {/* <div className="terms-and-conditions">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <p className="terms-and-conditions-info">{t("termsAndConditions")}</p>
        </div> */}

        <label className="terms-and-conditions">
          {t("termsAndConditions")}
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <PrimaryBtn
          type="submit"
          btnName={t("sendBtn")}
          className="contact-submitBtn"
        />
      </form>
      <img alt="wave pattern" className="contact-wave" />
    </div>
  );
};
