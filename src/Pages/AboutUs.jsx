import {
  AboutUsSwiper,
  SwiperText,
} from "../components/AboutUsFolder/AboutUsSwiper";
import "./AboutUs.css";
import { SectionTwo } from "../sections/SectionTwoFolder/SectionTwo";
import { AboutUsCard } from "../components/AboutUsFolder/AboutUsCardFolder/AboutUsCard";
import { ContactForm } from "../components/AboutUsFolder/ContactFormFolder/ContactForm";
import { MembersNumber } from "../components/AboutUsFolder/MembersNumber/MembersNumber";

export const AboutUs = () => {
  return (
    <>
      <h1 className="about-us-header">
        About <span className="about-us-header italic-red"> Us</span>
      </h1>

      <AboutUsSwiper />
      <SwiperText />
      <AboutUsCard />
      <MembersNumber />
      <SectionTwo />
      <ContactForm />
    </>
  );
};
