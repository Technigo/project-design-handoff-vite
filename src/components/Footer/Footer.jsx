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
`;

const SaddleUpFooter = styled.div`
  display: flex;
  gap: 52px;
  padding-top: 72px;
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
`;

export const Footer = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function
  return (
    <StyledFooter>
      <LogoLight />
      <SaddleUpFooter>
        <FollowUsIconsLight />
        <CompanyDetails>
          <p>{t("footer.terms")}</p>
          <p>{t("footer.privacy")}</p>
          <p>{t("footer.accessibility")}</p>
        </CompanyDetails>
      </SaddleUpFooter>
      <LanguageCopySection>
        <Translation />
        <Copyright />
      </LanguageCopySection>
    </StyledFooter>
  );
};
