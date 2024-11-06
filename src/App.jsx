// App.jsx

import { PersonalizedSpells } from "./sections/PersonalizedSpells";
import { Library } from "./sections/Library";
import { DailySpells } from "./sections/DailySpells";
import { Footer } from "./components/Footer";


export const App = () => {
  return (



    <main>

      <DailySpells />
      <Library />
      <PersonalizedSpells />
      <Footer />

    </main>
  )
};
