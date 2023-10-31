import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { MidSection } from "../components/MidSection";
import { Scroll1 } from "../components/Scroll";
import { Testimonials } from "../components/Testimonials";
export const FirstPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Scroll1 />
      <MidSection />
      <Testimonials />
    </div>
  );
};
