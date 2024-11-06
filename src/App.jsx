import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Steps } from "./components/Steps";
import { Testimonials } from "./components/Testimonials";
import { Heading2 } from "./components/Typography/Title";
import { Section } from "./components/Section";

export const App = () => {
  return (
    <>
      <main>
        <Header colorTheme="red" />
        <Section
          colorTheme="yellow"
          paddingTop="large"
        >
          <Button>Start today</Button>
        </Section>
        <Section
          colorTheme="red"
          paddingTop="xxlarge"
        >
          <Heading2>It&apos;s easy, peasy</Heading2>
        </Section>
        <Steps />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};
