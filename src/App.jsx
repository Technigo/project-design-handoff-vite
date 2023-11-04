import styles from './App.module.css'
import { Header } from './components/Header/Header.jsx'
import { BeginnerCTA } from './components/CTAs/BeginnerCTA.jsx'
import { SafetyCTA } from './components/CTAs/SafetyCTA.jsx'
import { Questions } from './components/Questions/Questions.jsx'
import { Benefits } from './components/Benefits/Benefits.jsx'
import { Footer } from './components/Footer/Footer.jsx'

export const App = () => {
  return (
    <>
      <div className={styles.siteContainer}>
        <div className={styles.contentWrapper}>
          <Header />
          <div className={styles.wrapCTA}>
            <BeginnerCTA />
            <SafetyCTA />
          </div>
          <Questions />
          <Benefits />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App