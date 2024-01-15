import styled from "styled-components";
import data from "../../assets/images.json";
import { useTranslation } from 'react-i18next';
import SWE from "../../../public/images/SwedishFlag.png";
import ENG from "../../../public/images/EnglishFlag.png";
import SPA from "../../../public/images/SpanishFlag.png";

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

const Flag = styled.img`
width: 54px;
height: 27px;
flex-shrink: 0;
border-radius: 10px
background: rgba(138, 201, 38, 0.60);

`



export const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <FootBar>
      <LogoImg src={data['logo']} alt="Logo" />

      <div>{t("about")}</div>
      <div>{t("head1")}</div>
      <div>{t("faq")}</div>
      <div>{t("contact")}</div>
      <div>
      <button onClick={() => changeLanguage('en')}>
        <Flag src={ENG} alt="English" />
      </button>
      <button onClick={() => changeLanguage('es')}>
        <Flag src={SPA} alt="Spanish" />
      </button>
      <button onClick={() => changeLanguage('sv')}>
        <Flag src={SWE} alt="Swedish" />
      </button>
    </div>
    </FootBar>
  );
};

