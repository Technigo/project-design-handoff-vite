import { HeroSection } from "./components/HeroSection";
import { NavigationBar } from "./components/NavigationBar";
import { RetreatActivities } from "./components/RetreatActivities";
import { TrustIndicator } from "./components/TrustIndicator";

export const App = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <TrustIndicator />
      <RetreatActivities />
    </>
  );
  import styled, { createGlobalStyle } from 'styled-components'; // Importing styled-components for styling
  import CoachSection from "./components/CoachSection"; // Importing CoachSection component
  import HealthierSection from "./components/HealthierSection"; // Importing HealthierSection component
  import Footer from "./components/Footer"; // Importing Footer component

  const App = () => {
    return (
      <div className="app">
        {/* Global styles */}
        <GlobalStyle />
        {/* Main section containing CoachSection, HealthierSection, and Footer */}
        <Main>
          <CoachSection />
          <HealthierSection />
          <Footer />
        </Main>
      </div>
    );
  };

  export default App;

  // Global styles
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
`;
