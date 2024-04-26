import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Reviews } from "./components/Reviews";

export const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Reviews />
      <div className="mt-96">
        <Footer />
      </div>
    </div>
  ) 
};