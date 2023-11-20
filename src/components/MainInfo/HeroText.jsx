import styled from "styled-components";
import { useTranslation } from "react-i18next";

const HeroTextContainer = styled.div`
  div {
    color: #c00202;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    text-align: center;
    padding: 39px 0;
  }
  span {
    padding: 0 4px;
  }

  @media screen and (min-width: 768px) {
    span {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1024px) {
    span {
      font-size: 40px;
    }
  }
`;

export const HeroText = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  return (
    <HeroTextContainer>
      <div>
        <span> {t("homePage.mainSection.primaryHeading.firstWord")}</span>
        <span>{t("homePage.mainSection.primaryHeading.secondWord")}</span>
        <span>{t("homePage.mainSection.primaryHeading.thirdWord")}</span>
      </div>
    </HeroTextContainer>
  );
};
