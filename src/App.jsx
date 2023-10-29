import { Header } from "../src/components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent.jsx";
import { Footer } from "../src/components/Footer/Footer";

export const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
