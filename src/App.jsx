import styles from './App.module.css'
import { NavBar } from './components/NavBar/NavBar.jsx'

export const App = () => {
  return (
    <>
      <div className={styles.siteContainer}>
        <div className={styles.logoContainer}>
        <img src="src/assets/chalkyLogo.svg" alt="Chalky logo" />
        </div>
        <NavBar />
        <div className={styles.heroContainer}>
        <img src="src/assets/heroImage.svg" alt="Chalky header image" />
        </div>
      </div>
    </>
  );
};
