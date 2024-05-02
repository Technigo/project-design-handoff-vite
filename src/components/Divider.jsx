import SmallDivider from "../assets/icons/Pink-line-mobile.svg";
import MediumDivider from "../assets/icons/Pink-line-tablet.svg";
import LargeDivider from "../assets/icons/Pink-line-desktop.svg";

export const Divider = () => {
  return (
    <div className="flex justify-center">
      <img src={SmallDivider} alt="pink divider" className="md:hidden" />
      <img
        src={MediumDivider}
        alt="pink divider"
        className="hidden md:block lg:hidden"
      />
      <img src={LargeDivider} alt="pink divider" className="hidden lg:block" />
    </div>
  );
};
