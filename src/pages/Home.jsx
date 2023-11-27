import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Sections/Header/Header";
import { Footer } from "../components/Sections/Footer/Footer";
import { HeroSection } from "../components/Sections/HeroSection/HeroSection";
import { BodySection } from "../components/Sections/BodySection/BodySection";
import { useTranslation } from "react-i18next";

export const Home = () => {
  //define via destructured variable two methods from useTranslation
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("dn"); // Default language is English

  return (
    <>
      <Header />
      <HeroSection />
      <BodySection />
      <Footer />
    </>
  );
};
