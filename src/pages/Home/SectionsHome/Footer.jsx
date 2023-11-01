import styled from "styled-components";
import { TranslationComponent } from "../../../components/TranslationComponent";

const FooterSection = styled.section`
background: var(--bg-color);
`


export const Footer = () => {
  return (
    <>
    <FooterSection>
        <div>
            Hej
        </div>
        <TranslationComponent />
    </FooterSection>
    </>
  )
}

//Iconerna med onClick. Flytta translation hit och fixa pil. och länkarna