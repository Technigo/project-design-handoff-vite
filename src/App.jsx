import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Steps } from "./components/Steps";
import { Testimonials } from "./components/Testimonials";

export const App = () => {
  return (
    <>
      <main>
        <Header colorTheme="red" />
        <Steps />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};
