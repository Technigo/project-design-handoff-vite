/* import styled, { createGlobalStyle } from 'styled-components'; // Importing styled-components for styling */
import { HeroSection } from "./components/HeroSection";
import { NavigationBar } from "./components/NavigationBar";
import { RetreatActivities } from "./components/RetreatActivities";
import { TrustIndicator } from "./components/TrustIndicator";
import { CoachSection } from "./components/CoachSection";
import { HealthierSection } from "./components/HealthierSection";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <TrustIndicator />
      <RetreatActivities />
      <CoachSection />
      <HealthierSection />
      <Footer />
    </>
  );
}


/* // Global styles
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    background-color: #eff7f6;
  }
`;

// Styled main section
const Main = styled.section`
  min-width: 100%;
` */