import { LogoLight } from "../ReusableComponents/Logo/LogoLight.jsx";
import { FollowUsIconsLight } from "../ReusableComponents/FollowUs/FollowUsIconsLight";
import { Translation } from "../Translation/Translation";
import { Copyright } from "./Copyright";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledFooter = styled.div`
  background: #202537;
  color: #fff6e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;

  @media screen and (min-width: 1024px) {
    height: 460px;
    justify-content: flex-end;
  }
`;

const LogoLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    //margin-top: 60px;
    width: 100%;
    padding: 0 64px;
  }
`;

const SaddleUpFooter = styled.div`
  display: flex;
  gap: 52px;
  padding-top: 60px;

  @media screen and (min-width: 1024px) {
    padding-top: 0;
  }
`;

const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const LanguageCopySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 60px 48px 32px;

  @media screen and (min-width: 1024px) {
    padding: 10px 0 20px;
    margin-top: 40px;
  }
`;

export const Footer = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function
  return (
    <StyledFooter>
      <LogoLinks>
        <LogoLight />
        <SaddleUpFooter>
          <FollowUsIconsLight />
          <CompanyDetails>
            <p>{t("footer.terms")}</p>
            <p>{t("footer.privacy")}</p>
            <p>{t("footer.accessibility")}</p>
          </CompanyDetails>
        </SaddleUpFooter>
      </LogoLinks>
      <LanguageCopySection>
        <Translation />
        <Copyright />
      </LanguageCopySection>
    </StyledFooter>
  );
};
