/* eslint-disable react/prop-types */
//import style
import styled from "styled-components";

//import icons
import Youtube from "../../public/icons/youtube.png";
import Facebook from "../../public/icons/facebook.png";
import Instagram from "../../public/icons/instagram.png";

//styles
const StyledSocials = styled.img`
  height: 40px;
  width: 40px;

  @media all and (min-width: 744px) {
    height: 25px;
    width: 25px;
  }
`;

const StyledSocialLink = styled.a`
  display: inline-block;
`;

//component
export const Socials = ({ social, url }) => {
  //determine which icon to use based on the 'socials' prop
  let iconSrc;
  switch (social) {
    case "yt":
      iconSrc = Youtube;
      break;
    case "fb":
      iconSrc = Facebook;
      break;
    case "ig":
      iconSrc = Instagram;
      break;
    default:
      iconSrc = Instagram; //default if no valid logo available
  }
  //wrap StyledSocials with StyledSocialLink and pass the url prop
  return (
    <StyledSocialLink href={url} target="_blank" rel="noopener noreferrer">
      <StyledSocials src={iconSrc} alt="Social Media" />
    </StyledSocialLink>
  );
};
