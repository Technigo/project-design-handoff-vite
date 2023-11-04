import {
  AboutUsSwiper,
  SwiperText,
} from "../components/AboutUsFolder/AboutUsSwiper";
import "./AboutUs.css";
import { SectionTwo } from "../sections/SectionTwoFolder/SectionTwo";
import { AboutUsCard } from "../components/AboutUsFolder/AboutUsCardFolder/AboutUsCard";

export const AboutUs = () => {
  return (
    <>
      <h1>About Us</h1>

      <AboutUsSwiper />
      <SwiperText />
      <AboutUsCard />
      <SectionTwo />
    </>
  );
};
