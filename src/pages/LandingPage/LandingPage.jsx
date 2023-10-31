import { FindUs } from "../../components/sections/FindUs";
import { Hero } from "../../components/sections/Hero";
import { Member } from "../../components/sections/Member";
import { SliderSection } from "../../components/sections/SliderSection";
import { Suspense } from "react";
import { Loader } from "../../components/ui/Loader";
import { ScrollToTop } from "../../components/ui/ScrollToTop";

export const LandingPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTop />
      <Hero />
      <Member />
      <FindUs />
      <SliderSection />
    </Suspense>
  );
};
