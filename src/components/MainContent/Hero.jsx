import HeroImage from "/assets/heroimage.jpg";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  //margin-top: 158px;

  img {
    width: 100%;
    min-height: 549px;
    max-height: 759px;
    object-fit: cover;
    object-position: 20% 100%;
    //flex-shrink: 0;

    @media screen and (min-width: 1024px) {
      gap: 50px;
      object-position: 20% 30%;
    }
  }
`;

const HeroTextWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  padding: 8px 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 70px;

  @media screen and (min-width: 1024px) {
    //height: 200px;
    padding: 24px;
    gap: 12px;
  }

  h1 {
    color: #081957;
    text-align: center;
    font-size: 28px;
    //font-style: normal;
    font-weight: 600;
    //line-height: normal;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }

  @media screen and (min-width: 668px) and (max-width: 1024px) {
    p {
      max-width: 60%;
    }
  }

  @media screen and (min-width: 1024px) {
    p {
      width: 45%;
    }
  }
`;

const StyledHeroButton = styled.div`
  display: flex;
  justify-content: center;
`;

const HeroButton = styled.button`
  display: flex;
  position: absolute;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #fff6e9;
  color: #202537;
  font-size: 16px;
  //font-style: normal;
  font-weight: 500;
  //line-height: normal;
  text-transform: uppercase;
  margin-top: 25px;

  @media screen and (min-width: 1024px) {
    margin-top: 40px;
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
      <HeroTextWrapper>
        <h1>{t("hero.mission")}</h1>
        <p>{t("hero.description")}</p>
        <StyledHeroButton>
          <HeroButton>{t("hero.button")}</HeroButton>
        </StyledHeroButton>
      </HeroTextWrapper>
    </StyledHero>
  );
};
