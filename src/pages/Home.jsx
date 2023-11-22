import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Sections/Header/Header";
import { Footer } from "../components/Sections/Footer/Footer";
import { HeroSection } from "../components/Sections/HeroSection/HeroSection";
import { BodySection } from "../components/Sections/BodySection/BodySection";
import { useTranslation } from "react-i18next";

export const Home = () => {
  //REMEMBER: to translate, every text, heading, writing in our whole page needs to be manually put INSIDE the json file to reference it!!

  //when creating the en.json file, complete it and THEN copy it into ChatGPT to ask it to translate only the values but not the keys into the language.

  //define via destructured variable two methods from useTranslation
  const { t, i18n } = useTranslation();

  //function to change the language
  const changeLanguageFunc = (lng) => {
    i18n.changeLanguage(lng);
  };

  const englishFunc = () => changeLanguageFunc("en");
  const swedishFunc = () => changeLanguageFunc("se");

  const [language, setLanguage] = useState("en"); // Default language is English

  return (
    <>
      <Header />
      <HeroSection />
      <BodySection />
      <Footer />
      <div className="internationalisation-wrapper">
        <button onClick={englishFunc}>En</button>
        <button onClick={swedishFunc}>Sw</button>
        <p>{t("homePage.upcomingCourses.header")}</p>
      </div>
    </>
  );
};
