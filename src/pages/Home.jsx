import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Sections/Header/Header";
import { Footer } from "../components/Sections/Footer/Footer";
import { HeroSection } from "../components/Sections/HeroSection/HeroSection";
import { ClassesSection } from "../components/Sections/ClassesSection/ClassesSection";
import { LinkButtonSection } from "../components/Sections/LinkButtonSection/LinkButtonSection";

export const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ClassesSection />
      <LinkButtonSection />
      <Footer />
    </>
  );
};
