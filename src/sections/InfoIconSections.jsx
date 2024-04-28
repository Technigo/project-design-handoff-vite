import PropTypes from "prop-types";

import { InfoIcons } from "../components/InfoIcons";

export const InfoIconSections = ({ data }) => {
  return (
    <div className="info-section  bg-light-lavender drop-shadow-section border-b border-b-black">
      <div className="max-w-screen-xl m-auto flex justify-around">
        {data.map((icon, index) => (
          <InfoIcons key={index} icon={icon} index={index} />
        ))}
      </div>
    </div>
  );
};

InfoIconSections.propTypes = {
  data: PropTypes.object.isRequired
};