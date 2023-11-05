import {useTranslation} from "react-i18next"
import styled from "styled-components"

const LanguageButton = styled.button`
    width: fit-content; 
    font-family: "Raleway"; 
    color: var(--lightest-red); 
    font-size: 14px; 
    font-weight: 400; 
    border-radius: 32px; 
    padding: 5px 10px; 
    border: 1px solid var(--lightest-red); 
    transition: 0.5s ease; 
    background: transparent; 

    &:hover {
      opacity: 0.7; 
      cursor: pointer; 
    }
  
    `
const ButtonWrapper = styled.div`
    display: flex; 
    justify-content: space-evenly; 
    padding-top: 20px; 
    border-top: 1px solid var(--lightest-red); 
    margin-top: 50px; 
    `


export const TranslationComponent = () => {
    const { i18n } = useTranslation()

    const changeLanguageFunc = (language) => {
        i18n.changeLanguage(language)
    }

    const englishFunc = () => changeLanguageFunc("en")
    const swedishFunc = () => changeLanguageFunc("se")

    return (
        <ButtonWrapper>
        <LanguageButton onClick={englishFunc}>English</LanguageButton>
        <LanguageButton onClick={swedishFunc}>Swedish</LanguageButton>
        </ButtonWrapper>
    )

}