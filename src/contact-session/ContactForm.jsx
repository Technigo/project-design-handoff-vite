import { BtnDark } from "../components/BtnDark";
import "/src/contact-session/contactForm.css";
export const ContactForm = () => {
  return (
    <div>
      <form className="form">
        <label>Name</label>
        <br />
        <input type="text" placeholder="Your name" className="input"></input>
        <br />
        <label>E-mail</label>
        <p>We´re going to reply to your message by e-mail</p>
        <input
          type="text"
          placeholder="name@domain.com"
          className="input"
        ></input>
        <br />
        <br />
        <label>Phone (optional)</label>
        <br />
        <p>Only if you want us to call you</p>
        <input
          type="text"
          placeholder="+00 000 00 00 00"
          className="input"
        ></input>
        <br />
        <label>Message</label>
        <br />
        <input
          type="text"
          placeholder="Enter your message here"
          className="input"
        ></input>
        <br />
      </form>
      <div className="submit">
        <p>Read our Privacy Policy on how we protect your data</p>
        <BtnDark name="send" />
        <img
          src="/public/assets/icon/phone_icon.svg"
          alt="phone"
          className="phone"
        />
        <p>+46 (0)761 00 22 33</p>
        <p>
          Is your kid unable to attend class? <br />
          Please leave us a voicemail!{" "}
        </p>
        <img src="/public/assets/img/location.svg" alt="map" className="map" />
        <p>
          Stortorget 8 <br />
          211 34 Malmö
        </p>
        <a href="https://maps.app.goo.gl/zAFCACfXNL3TbXqL8" className="address">
          Get Directions
        </a>
        <img
          src="/public/assets/icon/Illustration4.svg"
          alt="phone"
          className="phone"
        />
      </div>
    </div>
  );
};
