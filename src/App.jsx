import styled, { createGlobalStyle } from 'styled-components';
import CoachSection from "./components/CoachSection";
import HealthierSection from "./components/HealthierSection"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="app">
      <GlobalStyle />
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

  h1 {
    font-weight: 600;
    color: #262626;
    font-size: 24px;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
    color: #262626;
  }
`;

// Styled main section
const Main = styled.section`
  min-width: 100%;
`;
