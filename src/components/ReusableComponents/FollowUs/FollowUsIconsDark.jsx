import FacebookLogoDark from "../../../public/icons/Facebook (1).png";
import TwitterLogoDark from "../../../public/icons/Twitter(1).png";
import InstagramLogoDark from "../../../public/icons/Instagram(1).png";
//import styled from "styled-components";

// const FollowText = styled.p`
//   text-transform: uppercase;
// `;

export const FollowUsIconsDark = () => {
  return (
    <div className="follow">
      <img src={FacebookLogoDark} alt="Facebook Logo" />
      <img src={TwitterLogoDark} alt="Twitter Logo" />
      <img src={InstagramLogoDark} alt="Instagram Logo" />
    </div>
  );
};
