import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import celebrationImageDesktop from "../assets/images/celebration-image-desktop.png";
import celebrationImageTablet from "../assets/images/celebration-image-tablet.png";
import celebrationImageMobile from "../assets/images/celebration-image-mobile.png";

export const LearnMoreSection = ({ data }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 360);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 360);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-background-lavender text-text-dark p-5 text-center md:text-left flex flex-col md:flex-row-reverse">
      <div className="md:flex-1 md:text-left">
        <h2 className="font-orelega text-2xl md:text-4xl font-bold leading-tight">
          {isMobile ? "Embrace your awesomeness!" : data.heading}
        </h2>
        <p className="font-Montserrat mb-6">
          {" "}
          {isMobile
            ? "Celebrate success! Our Reward Program is filled with treats, discounts and special invites to events."
            : data.subheading}
        </p>
        <button className="bg-main-blue text-text-light py-2 px-6 rounded hover:bg-hover-blue transition duration-300">
          {data.cta}
        </button>
      </div>

      <div className="md:flex-1">
        <picture>
          <source
            srcSet={celebrationImageDesktop}
            media="(min-width: 1024px)"
          />
          <source srcSet={celebrationImageTablet} media="(min-width: 768px)" />
          <img
            className="md:w-full lg:w-full xl:w-full mb-0"
            src={celebrationImageMobile}
            alt="celebration"
          />
        </picture>
      </div>
    </div>
  );
};

LearnMoreSection.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
  }).isRequired,
};
