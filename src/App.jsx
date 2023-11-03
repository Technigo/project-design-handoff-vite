import styles from './App.module.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Header } from './components/Header/Header.jsx'
import { BeginnerCTA } from './components/CTAs/BeginnerCTA.jsx'
import { SafetyCTA } from './components/CTAs/SafetyCTA.jsx'
import { Questions } from './components/Questions/Questions.jsx'

export const App = () => {
  return (
    <>
      <div className={styles.siteContainer}>
        <div className={styles.contentWrapper}>
          <Header />
          <BeginnerCTA />
          <SafetyCTA />
          <Questions />
          {/* <NavBar /> */}
        </div>
      </div>
    </>
  );
};

export default App