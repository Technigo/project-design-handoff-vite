import FacebookLogoLight from "/icons/Facebook.png";
import TwitterLogoLight from "/icons/TwitterX.png";
import InstagramLogoLight from "/icons/Instagram.png";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const FollowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  gap: 8px;
`;

const Icons = styled.div`
  display: flex;
  gap: 16px;
`;

export const FollowUsIconsLight = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function
  return (
    <FollowContainer>
      <p>{t("footer.follow")}</p>
      <Icons>
        <img src={FacebookLogoLight} alt="Facebook Logo" />
        <img src={TwitterLogoLight} alt="Twitter Logo" />
        <img src={InstagramLogoLight} alt="Instagram Logo" />
      </Icons>
    </FollowContainer>
  );
};
