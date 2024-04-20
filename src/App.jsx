//components
import { Happenings } from "./components/Happenings";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Philosophy } from "./components/Philosophy";
import { Start } from "./components/Membership";
import { Yogis } from "./components/Yogis";
import { Quote } from "./components/Quote";
import { FAQ } from "./components/FAQ";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

//stylesheet
import "./App.css";

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Philosophy />
      <Yogis />
      <Happenings />
      <Start />
      <Quote />
      <FAQ />
      <Form />
      <Footer />
    </>
  );
};
