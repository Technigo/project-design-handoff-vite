import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-text">
        <h2>We are here for you</h2>
        <p>Thank you for your interest in our yoga services. We welcome any questions, feedback, or inquiries you may have. Please fill out the form, and we’ll get back to you as soon as possible. Your journey to wellness and inner balance starts here.</p>
      </div>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
          
          <div className="privacy-policy">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">I agree to the Privacy Policy.</label>
          </div>
          <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
