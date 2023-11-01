import HeroImage from "/assets/heroimage.jpg";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;

  img {
    width: auto;
    height: 549px;
    object-fit: cover;
    object-position: 20% 100%;
    //flex-shrink: 0;
  }
`;

const HeroTextbox = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 175px;
  padding: 8px 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 42px;

  h1 {
    color: #000;
    text-align: center;
    font-size: 28px;
    //font-style: normal;
    font-weight: 600;
    //line-height: normal;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }
`;

export const Hero = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function
  return (
    <StyledHero>
      <img
        src={HeroImage}
        alt="Picture of woman with her face next to a dark brown horse's face"
      />
      <HeroTextbox>
        <h1>{t("hero.mission")}</h1>
        <p>{t("hero.description")}</p>
      </HeroTextbox>
    </StyledHero>
  );
};
