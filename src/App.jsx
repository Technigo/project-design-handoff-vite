import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Reviews } from "./components/Reviews";

export const App = () => {
  return (
    <div className="page-container">
      <Header />
      <Reviews />
      <Footer />
    </div>
  ) 
};