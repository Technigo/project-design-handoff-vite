import styles from './HomePage.module.css'
import { Header } from '../Header/Header.jsx'
import { BeginnerCTA } from '../CTAs/BeginnerCTA.jsx'
import { SafetyCTA } from '../CTAs/SafetyCTA.jsx'
import { Questions } from '../Questions/Questions.jsx'
import { Benefits } from '../Benefits/Benefits.jsx'
import { Footer } from '../Footer/Footer.jsx'

export const HomePage = () => {
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

export default HomePage