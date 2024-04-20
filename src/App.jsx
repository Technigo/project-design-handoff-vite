//components
import { Happenings } from "./components/Happenings";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Philosophy } from "./components/Philosophy";
import { Start } from "./components/Start";
import { Yogis } from "./components/Yogis";
import { Quote } from "./components/Quote";
import { FAQ } from "./components/FAQ";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

//stylesheet
import "./App.css";

//fonts
import "./fonts/Argue.otf";
import "./fonts/Gerbera-Bold.otf";

export const App = () => {
  return (
    <div>
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
    </div>
  );
};
