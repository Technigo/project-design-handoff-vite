import React, { useState } from "react";
import "./Footer.css";
import "../translations";
import { useTranslation } from "react-i18next";

const Email = ({ updateFormData, value }) => {
  const { t, i18n } = useTranslation();
  const [error, setError] = useState("");
  const [subscriptionMessage, setSubscriptionMessage] = useState("");

  const emailInput = (e) => {
    const email = e.target.value;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!emailRegex.test(email)) {
      setError("Invalid email format");
    } else {
      setError("");
    }

    updateFormData("email", email);
  };

  const handleSubscribe = () => {
    if (!error) {
      setSubscriptionMessage("Thanks for your subscription!");
    }
  };

  return (
    <div className="email">
      <label>{t("subscribeNews")}</label>
      <input type="text" value={value} onChange={emailInput} />

      <button onClick={handleSubscribe}>{t("subscribeButton")}</button>
      {error && <div className="error-message">{error}</div>}
      {subscriptionMessage && (
        <div className="subscription-message">{subscriptionMessage}</div>
      )}
    </div>
  );
};

export default Email;

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({ email: "" });

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="footer">
      <div className="first-box">
        <img className="white-logo" src="MAGNW.png" alt="Logo image" />
        <div className="subscribe">
          <Email updateFormData={updateFormData} value={formData.email} />
        </div>
      </div>
      <div className="footer-information">
        <div className="column">
          <p className="title-line">{t("information")}</p>
          <p>{t("aboutUs")}</p>
          <p>{t("moreSearch")}</p>
          <p>{t("blog")}</p>
          <p>{t("testimonials")}</p>
          <p>{t("events")}</p>
        </div>
        <div className="column">
          <p className="title-line">{t("helpfulLinks")}</p>
          <p>{t("services")}</p>
          <p>{t("support")}</p>
          <p>{t("terms")}</p>
          <p>{t("privacy")}</p>
        </div>
        <div className="column">
          <p className="title-line">{t("ourServices")}</p>
          <p>{t("brandsList")}</p>
          <p>{t("facilities")}</p>
          <p>{t("openingHours")}</p>
        </div>
        <div className="column">
          <p className="title-line">{t("contactUs")}</p>
          <p>+46 001 89 89 10</p>
          <p>magnitude@support.com</p>
          <img src="facebook.png" alt="Facebook icon"></img>

          <img src="Instagram.png" alt="Instagram icon"></img>
          <img src="Google.png" alt="Google icon"></img>
          <img src="Twitter.png" alt="Twitter icon"></img>
        </div>
      </div>
      <img className="white-line" src="Line3.png" alt="White line"></img>
    </div>
  );
};
