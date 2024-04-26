import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Strength } from "./components/Strength";
import { Reviews } from "./components/Reviews";

export const App = () => {
  return (
    <div className="page-container">
      <Header />
      <Reviews />
      <Strength />
      <Footer />
    </div>
  ) 
};