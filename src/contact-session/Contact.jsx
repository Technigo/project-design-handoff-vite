import { ContactForm } from "./ContactForm";
import { IntroContact } from "./IntroContact";
import { Team } from "./Team";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <p>get in touch</p>
        <img src="/src/assets/icon/arrow_down.svg" />
      </div>
      <IntroContact />
      <ContactForm />
      <Team />
    </div>
  );
};
