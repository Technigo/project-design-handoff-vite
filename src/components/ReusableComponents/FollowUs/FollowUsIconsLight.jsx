import FacebookLogoLight from "/icons/Facebook.png";
import TwitterLogoLight from "/icons/TwitterX.png";
import InstagramLogoLight from "/icons/Instagram.png";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const FollowLightIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  gap: 8px;

  @media screen and (min-width: 668px) and (max-width: 1023px) {
    p {
      font-size: 20px;
    }
  }
`;

const LightIcons = styled.div`
  display: flex;
  gap: 16px;
`;

export const FollowUsIconsLight = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function
  return (
    <FollowLightIconContainer>
      <p>{t("footer.follow")}</p>
      <LightIcons>
        <img src={FacebookLogoLight} alt="Facebook Logo" />
        <img src={TwitterLogoLight} alt="Twitter Logo" />
        <img src={InstagramLogoLight} alt="Instagram Logo" />
      </LightIcons>
    </FollowLightIconContainer>
  );
};
