import PropTypes from "prop-types";

import logo from "../assets/icons/logo-desktop.png";
import yoga from "/assets/images/hero-image.png";
import burger from "../assets/icons/hamburger.svg";
import { SignUpButton } from "../components/SignUpButton";
import { Navigation } from "../components/Navigation";

export const HeroSection = ({ data }) => {
  return (
    <>
      <div className="hero-section bg-stripes-mobile tablet:bg-stripes-tablet desktop:bg-stripes-desktop bg-center bg-cover bg-no-repeat h-mhero desktop:h-[736px] ">
        <div className="relative h-mhero desktop:h-[736px] m-auto">
          <header className="flex justify-between items-center desktop:py-4 desktop:px-16 ">
            <img
              src={logo}
              alt={data.logoalt}
              className="w-24 desktop:w-[120px]"
            />
            <nav className="hidden desktop:flex gap-16">
              <Navigation data={data} />
            </nav>
            <img src={burger} className="h-12 desktop:hidden" />
            <img
              src=""
              alt=""
              className="hidden w-24 desktop:w-[120px] desktop:block"
            />
          </header>
          <img
            src={yoga}
            alt={data.logoalt}
            className="absolute bottom-0 right-4 z-0 w-[254px] tablet:w-[210px] desktop:w-[443px]"
          />

          <div className="flex flex-col m-auto justify-center items-center z-10 w-1/2">
            <h2 className="font-orelega text-5xl leading-8 mx-auto text-center mb-24 tablet:mb-0 desktop:text-[80px] desktop:leading-[96px] desktop:pt-20">
              {data.heading.toUpperCase()}
            </h2>
            <div className="hero-section hero-subheading hidden tablet:inline-flex">
              <h3 className="font-orelega px-6 py-12 text-center leading-none desktop:text-[40px]">
                {data.subheading}
              </h3>
            </div>
            <SignUpButton buttonName={data.cta} />
          </div>
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

HeroSection.propTypes = {
  data: PropTypes.object.isRequired
};
