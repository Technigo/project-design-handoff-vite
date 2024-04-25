import logo from "../assets/icons/logo-desktop.png";
import yoga from "../assets/images/hero-image-mobile-test.png";
import bg from "../assets/backgrounds/stripes-mobile.png";
import burger from "../assets/icons/hamburger.svg"
import { SignUpButton } from "../components/SignUpButton";

export const HeroSection = ({ data }) => {
  return (
    <>
      <div
        className="hero-section bg-center bg-cover bg-no-repeat relative h-mhero"
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <header className="flex justify-between items-center">

          <img src={logo} alt={data.logoalt} className="w-24" />
          <img src={burger} className="h-12" />
        </header>
        <img
          src={yoga}
          alt={data.logoalt}
          className="absolute bottom-0 right-4 z-0"
        />

        <div className="flex flex-col justify-center items-center z-10">
          <h2 className="font-orelega text-5xl leading-8 mx-auto whitespace-pre text-center mb-24">
            {data.heading.toUpperCase()}
          </h2>
          <SignUpButton buttonName={data.cta} />
        </div>
      </div>
      <div className="hero-section hero-subheading bg-background-lavender">
        <h3 className="font-orelega px-6 py-12 text-center leading-none">
          {data.subheading}
        </h3>
      </div>
    </>
  );
};
