import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";

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
