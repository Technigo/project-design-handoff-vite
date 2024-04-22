import { useState } from "react";
import "./index.css";
import { LearnMoreSection } from "./sections/LearnMoreSection";
import { FooterSection } from "./sections/FooterSection";
import dataEn from "./data.en.json";
import dataJp from "./data.jp.json";

export const App = () => {
  const [locale, setLocale] = useState("en");

  const data = locale === "en" ? dataEn : dataJp;

  const handleLanguageChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <>
      <LearnMoreSection data={data["learn-more"]} />
      <FooterSection
        onLanguageChange={handleLanguageChange}
        data={["footer"]}
      />
    </>
  );
};
