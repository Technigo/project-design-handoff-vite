import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
      <div className="flex-1 relative py-12 px-6 lg:w-144">
        <h2 className="font-orelega text-xl md:text-2xl font-bold mb-4 leading-tight lg:text-4xl lg:text-left">
          {isMobile ? "Embrace your awesomeness!" : data.heading}
        </h2>
        <p className="font-montserrat text-sm lg:text-left lg:text-lg">
          {isMobile
            ? "Celebrate success! Our Reward Program is filled with treats, discounts and special invites to events."
            : data.subheading.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {" "}
                  {line}
                  <br />
                </React.Fragment>
              ))}
        </p>
        <LearnMoreButton cta={data.cta} />
      </div>

      <div className="flex-1 lg:mb-0">
        <picture>
          <source
            srcSet="/assets/images/celebration-image-desktop.png"
            media="(min-width: 1024px)"
            className="bottom-0 drop-shadow-xl"
          />
          <source
            srcSet="/assets/images/celebration-image-tablet.png"
            media="(min-width: 768px)"
            className="drop-shadow-xl"
          />
          <img
            src="/assets/images/celebration-image-mobile.png"
            alt="Celebration"
            className="w-48 md:w-72 lg:w-full absolute bottom-0 left-0 mb-0 lg:static drop-shadow-xl"
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
