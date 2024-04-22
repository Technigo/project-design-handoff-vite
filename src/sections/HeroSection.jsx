import logo from "../assets/icons/logo-desktop.png";
import yoga from "../assets/images/hero-image-mobile.png"

export const HeroSection = ({ data }) => {
  return (
    <div className="hero-section">
      <img src={logo} alt={data.logoalt} />
      <img src={yoga} alt={data.logoalt} />
      <h2>{data.heading}</h2>
      <button>{data.cta}</button>
      <h3>{data.subheading}</h3>
    </div>
  );
};
