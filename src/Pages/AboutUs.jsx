import styled from "styled-components";
import { Header } from "../Sections/Header";
import { Headings } from "../Components/Headings";
import { Articles } from "../Sections/Articles";
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

export const AboutUs = () => {
  const sectionId = 5;

  return (
    <MainWrapper>
        <Header />
        <LeftButton />
        <Headings sectionId={sectionId}/>
        <Articles />
        <Footer />
    </MainWrapper>
  )
}
