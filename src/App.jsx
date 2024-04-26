import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Strength } from "./components/Strength";
import { Reviews } from "./components/Reviews";
import { Philosophy } from "./components/Philosophy";

export const App = () => {
  return <div>
 <Header />
      <Reviews />
      <Philosophy />
      <Strength />
      <Footer />
  </div>
  }
