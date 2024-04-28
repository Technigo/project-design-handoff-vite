import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Strength } from "./components/Strength";
import { Reviews } from "./components/Reviews";
import { Philosophy } from "./components/Philosophy";

export const App = () => {
  return <div>
<Hero />
<Reviews />
  <Philosophy />
    <Strength />
    <Footer />
  </div>
}
