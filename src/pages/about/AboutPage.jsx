import { Section1 } from "./sections/section1/Section1";
import { QuoteAboutPage } from "./sections/quoteAboutPage/QuoteAboutPage";
import { Section3 } from "./sections/section3/Section3";
import { Contact } from "./sections/contact/Contact";

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
