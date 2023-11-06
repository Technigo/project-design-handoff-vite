import styles from './Header.module.css'
import menuStyles from './HamburgerMenu.module.css'
import { Link } from 'react-router-dom'
import { H1 } from '../../reusableComponents/H1/H1.jsx'
import { P1 } from '../../reusableComponents/P1/P1.jsx'
import { P2 } from '../../reusableComponents/P2/P2.jsx'
import { FilledButton } from '../../reusableComponents/FilledButton/FilledButton.jsx'
import { BorderButton } from '../../reusableComponents/BorderButton/BorderButton.jsx'
import { useState } from 'react'
import menuButton from '../../assets/menuButton.svg'
import chalkyLogo from '../../assets/chalkyLogo.svg'

export const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <div className={styles.mainContainer}>
                <img src={chalkyLogo} alt="Chalky logo" />
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
                    <H1 heading="Reach new heights with us!" />
                    <P1
                        className={styles.p1}
                        text="Whether you're a curious first-timer or a seasoned climber seeking new challenges, our dedicated team of experts is here to guide you every grip of the way." />
                    <div className={styles.buttonContainer}>
                        <FilledButton buttonText="TRY FOR FREE" />
                        <Link to={`/aboutus`} className={styles.link}><BorderButton buttonText="ABOUT US" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header