import data from "../assets/images.json";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const VisionBack = styled.img`
width: 587px;
height: 311px;
`

const VisionBlue = styled.div`
width: 587px;
height: 320px;
background-color: rgba(25, 130, 196, 0.40);
`

const VisionTitle = styled.div`
color: #000;
font-family: Comfortaa;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const VisionText = styled.div`
color: #000;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const Vision = () => {
    const { t } = useTranslation();


  return (
<>
<VisionBack src={data.vision} alt="Background"/>
    <VisionBlue>
        <VisionTitle>{t("head7")}</VisionTitle>
        <VisionText>{t("paragraph6")}</VisionText>
    </VisionBlue>
<VisionBack src={data.story} alt="Background"/>
    <VisionBlue>
        <VisionTitle>{t("head7")}</VisionTitle>
        <VisionText>{t("paragraph6")}</VisionText>
    </VisionBlue>
<VisionBack src={data.oldwoman} alt="Background"/>
</>
  )
}
