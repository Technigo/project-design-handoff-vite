import { InfoIcons } from "../components/InfoIcons";

export const InfoIconSections = ({ data }) => {
  return (
    <div className="info-section flex justify-around bg-light-lavender drop-shadow-section border-b border-b-black">
      {data.map((icon, index) => (
        <InfoIcons key={index} icon={icon} index={ index} />
      ))}
    </div>
  );
};
