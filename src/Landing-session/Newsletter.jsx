import "../Landing-session/newsletter.css";
import { BtnLight } from "../components/BtnLight";

export const Newsletter = () => {
  return (
    <div className="newsletter-wrapper">
      <img
        src="/public/assets/icon/Illustration5.svg"
        alt="circle-divider"
        className="subscribe-divider"
      />
      <h1>Join the flow!</h1>
      <p>
        We are always in movement at MINI FLOW. Subscribe to our newsletter to
        be the first to receive our latest updates, special offers and bonus
        yoga videos.
      </p>
      <form className="subscribe-wrapper">
        <input
          type="text"
          className="input"
          placeholder="your e-mail address"
        />
        <button className="subscribe-btn"> subscribe! </button>
      </form>
    </div>
  );
};
