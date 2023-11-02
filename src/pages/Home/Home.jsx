import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Welcome } from "../../components/Welcome/Welcome";
// import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      {/* <Footer /> */}
    </>
  );
};
