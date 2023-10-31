import styles from "./LandingPage.module.scss";
import { FindUs } from "../../components/sections/FindUs";
import { Hero } from "../../components/sections/Hero";
import { Member } from "../../components/sections/Member";
import { SliderSection } from "../../components/sections/SliderSection";

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Member />
      <FindUs />
      <SliderSection />
    </>
  );
};
