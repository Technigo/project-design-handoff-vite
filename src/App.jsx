import styled from "styled-components";
import { breakpoints } from "./utils/helpers";

/* Components */
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Steps } from "./components/Steps";
import { Testimonials } from "./components/Testimonials";
import { Heading2 } from "./components/Typography/Title";
import { Section } from "./components/Section";

const GroupedSections = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  ${breakpoints("grid-auto-flow", "", [{ 0: "row" }, { 1024: "column" }])};
`;

export const App = () => {
  return (
    <>
      <main>
        <Header colorTheme="red" />
        <GroupedSections>
          <Section colorTheme="yellow" paddingTop="large">
            <Button url="https://google.com">Start today</Button>
          </Section>
          <Section colorTheme="red" paddingTop="large">
            <Heading2>It&apos;s easy, peasy</Heading2>
          </Section>
        </GroupedSections>
        <Section colorTheme="white" paddingTop="xxxlarge">
          <Steps />
        </Section>
        <Section colorTheme="red" paddingTop="xxlarge">
          <Heading2>Kind words</Heading2>
        </Section>
        <Section colorTheme="white" paddingTop="large">
          <Testimonials />
        </Section>
      </main>

      <Footer colorTheme="yellow" />
    </>
  );
};
