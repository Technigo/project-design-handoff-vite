import { BtnDark } from "../components/BtnDark";

export const ContactForm = () => {
  return (
    <div className="form">
      <form>
        <label>Name</label>
        <input type="text" placeholder="Your name"></input>
        <label>E-mail</label>
        <p>We´re going to reply to your message by e-mail</p>
        <input type="text" placeholder="name@domain.com"></input>
        <label>Phone (optional)</label>
        <p>Only if you want us to call you</p>
        <input type="text" placeholder="+00 000 00 00 00"></input>
        <label>Message</label>
        <input type="text" placeholder="Enter your message here"></input>
      </form>
      <p>Read our Privacy Policy on how we protect your data</p>
      <BtnDark name="send" />

      <div className="map">
        <img src="./src/assets/icon/phone_icon.svg" alt="phone" />
        <p>+46 (0)761 00 22 33</p>
        <p>Is your kid unable to attend class? Please leave us a voicemail! </p>
        <img src="./src/assets/icon/Illustration4.svg" alt="phone" />
      </div>
    </div>
  );
};
