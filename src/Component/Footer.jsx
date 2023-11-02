import styled from "styled-components";
import data from "../assets/images.json";
import { useTranslation } from 'react-i18next';

const FootBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(138, 201, 38, 0.60);
  width: 547px;
  height: 160px;
  padding: 0 20px;
`;

const LogoImg = styled.img`
  width: 76px;
  height: 76px;
  border-radius: 120px;
  margin-left: 20px;
`;

export const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <FootBar>
      <LogoImg src={data['logo']} alt="Logo" />
      <h1>{t("head6")}</h1>
      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("es")}>Spanish</button>
        <button onClick={() => changeLanguage("sv")}>Swedish</button>
      </div>
    </FootBar>
  );
};
