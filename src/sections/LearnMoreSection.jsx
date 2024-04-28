import React from "react";
import PropTypes from "prop-types";
import { LearnMoreButton } from "../components/LearnMoreButton";

export const LearnMoreSection = ({ data }) => {

  return (
    <div className="bg-background-lavender text-text-dark text-center flex flex-col lg:flex-row-reverse items-start relative md:items-center lg:justify-center">
      <div className="flex-1 relative py-6 px-6 max-w-[600px]">
        <h2 className="font-orelega text-xl md:text-2xl font-bold mb-4 leading-tight lg:text-4xl lg:text-left">
          <span className="block md:hidden">
            {data["smallHeading"]}
          </span>
          <span className="hidden md:block">
            {data["heading"]}
          </span>
        </h2>
        <p className="font-montserrat text-sm lg:text-left lg:text-lg">
         
          <span className="block md:hidden">
            {data["smallSubheading"]}
          </span>
          <span className="hidden md:block">
            {data.subheading.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {" "}
                {line}
                <br />
              </React.Fragment>
            ))}
          </span>
        </p>
        <LearnMoreButton cta={data.cta} />
      </div>

      <div>
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
            className="w-48 md:w-72 lg:w-full absolute bottom-0 left-0 mb-0 md:ml-28 lg:static drop-shadow-xl max-w-[652px] self-end"
          />
        </picture>
      </div>
    </div>
  );
};

LearnMoreSection.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    smallHeading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    smallSubheading: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
  }).isRequired,
};
