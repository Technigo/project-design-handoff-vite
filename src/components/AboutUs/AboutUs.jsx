import { AboutUsHome } from '../AboutUsHome/AboutUsHome.jsx'
import { Form } from '../Form/Form.jsx'
import { FAQ } from '../FAQ/FAQ.jsx'
import { Footer } from '../Footer/Footer.jsx'
import styles from './AboutUs.module.css'

export const AboutUs = () => {
    return (
        <>
            <div className={styles.aboutUs}>
                <div className={styles.mainContainer}>
                    <AboutUsHome />
                    <Form />
                    <FAQ />
                    <Footer />
                </div>
            </div>
        </>
    )
}