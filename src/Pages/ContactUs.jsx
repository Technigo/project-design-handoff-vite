import styled from "styled-components";

import { Header } from "../Sections/Header";
import { Headings } from "../Components/Headings";
import { ContactForm } from "../Sections/ContactForm";
import { SocialMedia } from "../Sections/SocialMedia";
import { Footer } from "../Sections/Footer";
import { LeftButton } from "../Components/LeftButton";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 16px;

  @media (min-width: 394px) {
    gap: 49px;
    padding: 32px;
  }

  @media (min-width: 835px) {
    gap: 64px;
    padding: 64px;
  }
`

export const ContactUs = () => {
  const sectionId = 6;
  
  return (
    <MainWrapper>
        <Header />
        <LeftButton />
        <Headings sectionId={sectionId}/>
        <ContactForm />
        <SocialMedia />
        <Footer />
    </MainWrapper>
  )
}
