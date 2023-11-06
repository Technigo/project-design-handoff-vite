import { Section1 } from "./scenes/section1/Section1";
import { QuoteAboutPage } from "./scenes/quoteAboutPage/QuoteAboutPage";
import { Section3 } from "./scenes/section3/Section3";
import { Contact } from "./scenes/contact/Contact";

export const AboutPage = () => {
  return (
    <>
      <Section1 />
      <QuoteAboutPage />
      <Section3 />
      <Contact />
    </>
  );
};
