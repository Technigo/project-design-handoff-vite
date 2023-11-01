import styled from "styled-components"
import { Button } from "../../reusableComponents/Button"

const FooterWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
max-width: 100%;
padding:10px 50px 50px 50px;
align-items: center;
justify-content: center; 
` 
const FooterImage = styled.img`
width: 138px;
height: 104px;
margin: 0 auto;
`
const ButtonWrapper = styled.div`
display: flex;
flex-direction: row;
gap:20px;
justify-content: center;
`
const TranslateButton = styled(Button)`
 background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`
 export const Footer = () =>  {
   return (
     <>
       <FooterWrapper>
       <FooterImage src="./logo.png" alt="Logo" />
       <ButtonWrapper>
       <TranslateButton imageSrc="./SwedishLanguage.png" />
           <TranslateButton imageSrc="./EnglishLanguage.png" />
         </ButtonWrapper>
         </FooterWrapper>
    </>
  )
}
