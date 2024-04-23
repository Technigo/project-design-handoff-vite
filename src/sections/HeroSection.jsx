import logo from "../assets/icons/logo-desktop.png";
import yoga from "../assets/images/hero-image-mobile-test.png";
import bg from "../assets/backgrounds/stripes-mobile.png";

export const HeroSection = ({ data }) => {
  return (
    <>
      <div
        className="hero-section"
        style={{ backgroundImage: "url(" + bg + ")" }}
        class="bg-center bg-no-repeat relative h-mhero"
      >
        <img src={logo} alt={data.logoalt} />
        <img src={yoga} alt={data.logoalt} class="absolute bottom-0 right-0" />
        <h2 class="font-orelega text-5xl mx-auto whitespace-pre text-center">
          {data.heading}
        </h2>
        <button class="border border-main-blue items-center">{data.cta}</button>
      </div>
      <div
        className="hero-section hero-subheading"
        style={{ backgroundColor: "#bb9cf0" }}
      >
        <h3 class="font-montserrat ">{data.subheading}</h3>
      </div>
    </>
  );
};
