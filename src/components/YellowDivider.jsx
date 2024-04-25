import YellowSmall from "../assets/icons/Yellow-dividers-small.svg";
import YellowMid from "../assets/icons/Yellow-dividers-medium.svg";
import YellowLarge from "../assets/icons/Yellow-dividers-large.svg";

export const YellowDivider = () => {
  return (
    <div className="z-2 absolute">
      <img src={YellowSmall} alt="yellow dividers" className="md:hidden" />
      <img
        src={YellowMid}
        alt="yellow dividers"
        className="hidden md:block lg:hidden"
      />
      <img
        src={YellowLarge}
        alt="yellow dividers"
        className="hidden lg:block"
      />
    </div>
  );
};
