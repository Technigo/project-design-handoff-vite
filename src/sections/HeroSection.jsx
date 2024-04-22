import logo from "../assets/icons/logo-desktop.png";
import yoga from "../assets/images/hero-image-mobile.png";
import bg from "../assets/backgrounds/stripes-mobile.png";

export const HeroSection = ({ data }) => {
  return (
    <>
      <div
        className="hero-section"
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <img src={logo} alt={data.logoalt} />
        <img src={yoga} alt={data.logoalt} />
        <h2>{data.heading}</h2>
        <button>{data.cta}</button>
      </div>
      <div
        className="hero-section hero-subheading"
        style={{ backgroundColor: "#bb9cf0" }}
      >
        <h3>{data.subheading}</h3>
      </div>
    </>
  );
};
