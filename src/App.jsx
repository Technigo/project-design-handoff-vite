import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TrustIndicators } from "./components/TrustIndicators";
import { ReasonSection } from "./components/ReasonSection";
import { BookClass } from "./components/BookClass";
import { FeedbackSection } from "./components/FeedbackSection";
import { FAQs } from "./components/FAQs";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { FeedbackCarousel } from "./components/FeedbackCarousel";

export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustIndicators />
      <ReasonSection />
      <BookClass />
      <FeedbackCarousel />
      <FeedbackSection />
      <FAQs />
      <Newsletter />
      <Footer />
    </>
  );
};
