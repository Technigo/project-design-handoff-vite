import React, { useState } from "react";

const Email = ({ updateFormData, value }) => {
  const [error, setError] = useState("");

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

  return (
    <div className="email">
      <label>Subscribe to our newsletter</label>
      <input type="text" value={value} onChange={emailInput} />
      <button>Subscribe now</button>
    </div>
  );
};

export const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="footer">
      <img src="./public/Images/Logo.png" alt="Logo image" />
      <Email updateFormData={updateFormData} value={formData.email} />
      <div className="footer-information">
        <p className="title-line">Information</p>
        <p>About us</p>
        <p>More Search</p>
        <p>Blog</p>
        <p>Testimonials</p>
        <p>Events</p>
        <p className="title-line">Helpful Links</p>
        <p>Services</p>
        <p>Support</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p className="title-line"> Our Services</p>
        <p>Brands list</p>
        <p>Facilities</p>
        <p>Opening hours</p>
        <p className="title-line">Contact Us</p>
        <p>+46 001 89 89 10</p>
        <p>groundzero@support.com</p>
        <img src="./public/Images/Facebook.png" alt="Facebook logo" />
        <img src="./public/Images/Instagram.png" alt="Instagram logo" />
        <img src="./public/Images/Maps.png" alt="Google map logo" />
        <img src="./public/Images/Twitter.png" alt="Twitter logo" />
      </div>
    </div>
  );
};
