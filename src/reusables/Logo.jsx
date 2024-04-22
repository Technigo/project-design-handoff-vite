/* eslint-disable react/prop-types */

//import logos
import LogoPrimarySmall from "../../public/logo/primary-small.png";
import LogoPrimaryBig from "../../public/logo/primary-big.png";
import LogoSecondary from "../../public/logo/secondary-big.png";

//component
export const Logo = ({ type }) => {
  //determine which logo to use based on the 'type' prop
  let logoSrc;
  switch (type) {
    case "small":
      logoSrc = LogoPrimarySmall;
      break;
    case "big":
      logoSrc = LogoPrimaryBig;
      break;
    case "secondary":
      logoSrc = LogoSecondary;
      break;
    default:
      logoSrc = LogoPrimarySmall; //default to small if no valid type is provided
  }

  return <img src={logoSrc} alt="Shanti Yoga Logo" />;
};
