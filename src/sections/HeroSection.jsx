import logo from "../assets/icons/logo-desktop.png";
import yoga from "../assets/images/hero-image-mobile-test.png";
import bg from "../assets/backgrounds/stripes-mobile.png";
import burger from "../assets/icons/hamburger.svg"
import { SignUpButton } from "../components/SignUpButton";


export const HeroSection = ({ data }) => {
  return (
    <>
      <div
        className="hero-section bg-stripes-mobile bg-center bg-cover bg-no-repeat relative h-mhero "
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

        <div className="flex flex-col m-auto justify-center items-center z-10 w-1/2">
          <h2 className="font-orelega text-5xl leading-8 mx-auto text-center mb-24 tablet:mb-0">
            {data.heading.toUpperCase()}
          </h2>
          <div className="hero-section hero-subheading hidden tablet:inline-flex">
            <h3 className="font-orelega px-6 py-12 text-center leading-none">
              {data.subheading}
            </h3>
          </div>
          <SignUpButton buttonName={data.cta} />
        </div>
      </div>
      <div className="hero-section hero-subheading bg-background-lavender tablet:hidden">
        <h3 className="font-orelega px-6 py-12 text-center leading-none">
          {data.subheading}
        </h3>
      </div>
    </>
  );
};
