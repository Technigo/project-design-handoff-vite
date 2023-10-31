import { Logo } from "../Logo";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: #fff;
`

export const Footer = () => {
    const { t, i18n } = useTranslation();

    // Function to change the language
    const changeLanguageFunction = (lng) => {
        i18n.changeLanguage(lng);
    }

    const englishFunction = () => {
        changeLanguageFunction("en");
    }

    const swedishFunction = () => {
        changeLanguageFunction("se");
    }

    return (
        <FooterContainer>
            <Logo text={"Align Yoga Studio"} />
            <h2>{t("welcome")}</h2>
            <h1>{t("translatePage.heading")}</h1>
            <button onClick={englishFunction}>English</button>
            <button onClick={swedishFunction}>Swedish</button>
        </FooterContainer>
    )
}
