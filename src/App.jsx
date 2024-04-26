import { useState } from "react";
import "./index.css";
import { LearnMoreSection } from "./sections/LearnMoreSection";
import { FooterSection } from "./sections/FooterSection";
import dataEn from "./data.en.json";
import dataJp from "./data.jp.json";
import { HeroSection } from "./sections/HeroSection";
import { InfoIconSections } from "./sections/InfoIconSections";
import { FeatureReviewSection } from "./sections/FeatureReviewSection";

export const App = () => {
  const [locale, setLocale] = useState("en");

  const data = locale === "en" ? dataEn : dataJp;

 const handleLanguageChange = (e) => {
  setLocale(e.target.value);
};
  return (
    <>
      <HeroSection data={data["hero"]} />
      <InfoIconSections data={data["info-icons"]} />
      <FeatureReviewSection
        featureData={data["features"]}
        reviewData={data["reviews"]}
      />
      <LearnMoreSection data={data["learn-more"]} />
      <FooterSection
       onLanguageChange={handleLanguageChange}
      data={{ ...data["footer"], locale }}
      />
    </>
  );
};
