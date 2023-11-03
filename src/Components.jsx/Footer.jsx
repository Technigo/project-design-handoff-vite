import React, { useState } from "react";
import "./Footer.css";

const Email = ({ updateFormData, value }) => {
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
      setSubscriptionMessage("Thanks for your subscription");
    }
  };

  return (
    <div className="email">
      <label>Subscribe to our newsletter</label>
      <input type="text" value={value} onChange={emailInput} />

      <button onClick={handleSubscribe}>Subscribe now</button>
      {error && <div className="error-message">{error}</div>}
      {subscriptionMessage && (
        <div className="subscription-message">{subscriptionMessage}</div>
      )}
    </div>
  );
};

export default Email;

export const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="footer">
      <img
        className="white-logo"
        src="./Images/whitelogo.png"
        alt="Logo image"
      />
      <div className="subscribe">
        <Email updateFormData={updateFormData} value={formData.email} />
      </div>
      <div className="footer-information">
        <div className="column">
          <p className="title-line">Information</p>
          <p>About us</p>
          <p>More Search</p>
          <p>Blog</p>
          <p>Testimonials</p>
          <p>Events</p>
        </div>
        <div className="column">
          <p className="title-line">Helpful Links</p>
          <p>Services</p>
          <p>Support</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="column">
          <p className="title-line"> Our Services</p>
          <p>Brands list</p>
          <p>Facilities</p>
          <p>Opening hours</p>
        </div>
        <div className="column">
          <p className="title-line">Contact Us</p>
          <p>+46 001 89 89 10</p>
          <p>groundzero@support.com</p>
          <img src="./Images/facebook.png" alt="Facebook icon"></img>

          <img src="./Images/Instagram.png" alt="Instagram icon"></img>
          <img src="./Images/Google.png" alt="Google icon"></img>
          <img src="./Images/Twitter.png" alt="Twitter icon"></img>
        </div>
      </div>
      <img
        className="white-line"
        src="./Images/Line3.png"
        alt="White line"
      ></img>
    </div>
  );
};
