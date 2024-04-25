import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import celebrationImageDesktop from "../assets/images/celebration-image-desktop.png";
import celebrationImageTablet from "../assets/images/celebration-image-tablet.png";
import celebrationImageMobile from "../assets/images/celebration-image-mobile.png";
import { LearnMoreButton } from "../components/LearnMoreButton";

export const LearnMoreSection = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 360);
    checkIfMobile();

    function handleResize() {
      checkIfMobile();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-background-lavender text-text-dark text-center flex flex-col lg:flex-row-reverse items-start relative">
      <div className="flex-1 relative py-12 px-6">
        <h2 className="font-orelega text-xl md:text-4xl font-bold mb-4 leading-tight">
          {isMobile ? "Embrace your awesomeness!" : data.heading}
        </h2>
        <p className="font-montserrat text-sm">
          {isMobile
            ? "Celebrate success! Our Reward Program is filled with treats, discounts and special invites to events." : data.subheading.split("\n").map((line) =>(
              <>
                {line}
                <br />
            </>
            ))}
        </p>
       <LearnMoreButton cta={data.cta} /> 
      </div>

      <div className="flex-1">
        <picture>
          <source
            srcSet={celebrationImageDesktop}
            media="(min-width: 1024px)"
          />
          <source srcSet={celebrationImageTablet} media="(min-width: 768px)" />
          <img
            src={celebrationImageMobile}
            alt="Celebration"
            className="w-48 md:w-64 lg:w-full absolute bottom-0 left-0 lg:static"
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
