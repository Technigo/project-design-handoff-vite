// App.jsx

// import { ThemeProvider } from "styled-components";
// import { theme } from "../src/styles/theme";
import { PersonalizedSpells } from "./sections/PersonalizedSpells";
import { Library } from "./sections/Library";
import { DailySpells } from "./sections/DailySpells";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


export const App = () => {
  return (



    <main>

      <Header />
      <DailySpells />
      <Library />
      <PersonalizedSpells />
      <Footer />

    </main>
  )
};
