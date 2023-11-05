import styled from "styled-components";
import data from "../assets/images.json";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const BlueBack = styled.div`
  background: rgba(25, 130, 196, 0.40);
  display: flex;
  align-items: flex-start;
  width: 547px;
  height: 295px;
  padding: 20px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  gap: 25px;
`

const About = styled.div`
  color: #6A4093;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const AboutText = styled.div`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.352px;
`

const Boy = styled.img`
  border-radius: 50%;
  width: 170px;
  height: 170px;
`

const PPBtn = styled(Link)` /* Use Link component instead of button */
  border-radius: 32px;
  background: #FFCA3A;
  display: flex;
  width: 250px;
  height: 41px;
  justify-content: center;
  cursor: pointer;
  color: #6A4093;
  font-size: 16px;
  font-style: normal;
  text-decoration: none; /* Remove underline from the link */
`

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <BlueBack>
      <TextContainer>
        <About>{t("head4")}</About>
        <AboutText>{t("paragraph5")}</AboutText>
        <PPBtn to="/classes"> {t("head5")}</PPBtn> {/* Set the "to" prop to the target page URL */}
      </TextContainer>
      <Boy src={data.boy} alt="Boy playing" />
    </BlueBack>
  )
}

