import styles from './AboutUsHome.module.css'
import menuStyles from '../Header/HamburgerMenu.module.css'
import chalkyLogo from "../../assets/chalkyLogo.svg"
import menuButton from '../../assets/menuButton.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { H1 } from '../../reusableComponents/H1/H1.jsx'
import { H2 } from '../../reusableComponents/H2/H2.jsx'
import { P1 } from '../../reusableComponents/P1/P1.jsx'
import { P2 } from '../../reusableComponents/P2/P2.jsx'

export const AboutUsHome = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <div className={styles.mainContainer}>
                <Link to={`/`}><img src={chalkyLogo} alt="Chalky logo" /></Link>
                <div className={menuStyles.hamburgerNav}>
                    {!openMenu && <button className={menuStyles.open} onClick={() => setOpenMenu(true)}><img src={menuButton} alt="Menu" /></button>}
                    {openMenu && (
                        <div className={menuStyles.menuContent}>
                            <P2 text="Memberships" />
                            <Link to={`/aboutus/`} className={styles.link}><P2 text="About Us" /></Link>
                            <P2 text="Programs" />
                            <P2 text="FAQ" />
                            <button className={menuStyles.close} onClick={() => setOpenMenu(false)}>CLOSE</button>
                        </div>
                    )}
                </div>
                <div className={styles.navBar}>
                    <p>Memberships</p>
                    <Link to={`/aboutus/`} className={styles.link}><p>About Us</p></Link>
                    <p>Programs</p>
                    <p>FAQ</p>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.h1Container}>
                        <H1 heading="We just love to climb together" />
                    </div>
                    <P2
                        text="Welcome to Stockholm's most beginner-friendly indoor climbing hall, 
                            where adventure knows no bounds, and the thrill of conquering new heights 
                            awaits climbers of all levels!" />
                    <P2
                        text="Our state-of-the-art facility is designed with beginners in mind, 
                            providing a safe and welcoming environment for everyone to discover the 
                            exhilaration of indoor climbing. Whether you're a curious first-timer or 
                            a seasoned climber seeking new challenges, our dedicated team of experts 
                            is here to guide you every grip of the way." />
                    <P2
                        text="With a diverse range of climbing walls and routes, we offer 
                            something for everyone, from gentle inclines to daring overhangs. 
                            You'll find a supportive community of fellow climbers who share your 
                            passion and are ready to encourage your progress." />
                    <H2 heading="Visit us anytime during our opening hours:" />
                    <div className={styles.openingHours}>
                        <P1 text="Mon-Fri 7:30-22:00" />
                        <P1 text="Sat-Sun 10:00-20:00" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsHome