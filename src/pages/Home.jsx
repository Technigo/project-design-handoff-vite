import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/HeroSection/HeroSection";

export const Home = () => {
  return (
    <>
      <Header />
      <div>Home</div>
      <HeroSection />
      <Footer />
    </>
  );
};
