/* eslint-disable react/prop-types */

//import logos
import LogoPrimarySmall from "../../public/logo/primary-small.png";
import LogoPrimaryBig from "../../public/logo/primary-big.png";
import LogoSecondary from "../../public/logo/secondary-big.png";

//component
export const Logo = ({ type }) => {
  //determine which logo to use based on the 'type' prop
  let logoSrc;
  let width;
  let height;

  switch (type) {
    case "small":
      logoSrc = LogoPrimarySmall;
      width = "133px";
      height = "56px";
      break;
    case "big":
      logoSrc = LogoPrimaryBig;
      width = "200px";
      height = "84px";
      break;
    case "secondary":
      logoSrc = LogoSecondary;
      width = "161px";
      height = "200px";
      break;
    default:
      logoSrc = LogoPrimarySmall;
      width = "133px";
      height = "56px"; //default to small if no valid type is provided
  }

  return (
    <img src={logoSrc} alt="Shanti Yoga Logo" width={width} height={height} />
  );
};
