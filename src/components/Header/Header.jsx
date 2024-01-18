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
import { useTranslation } from 'react-i18next'

export const Header = () => {

    const { t, i18n } = useTranslation()

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <div className={styles.mainContainer}>
                <img src={chalkyLogo} alt="Chalky logo" />
                <div className={menuStyles.hamburgerNav}>
                    {!openMenu && <button className={menuStyles.open} onClick={() => setOpenMenu(true)}><img src={menuButton} alt="Menu" /></button>}
                    {openMenu && (
                        <div className={menuStyles.menuContent}>
                            <P2 text={t('navBar.nav1')} />
                            <Link to={`/aboutus/`} className={styles.link}><P2 text={t('navBar.nav2')} /></Link>
                            <P2 text={t('navBar.nav3')} />
                            <P2 text={t('navBar.nav4')} />
                            <button className={menuStyles.close} onClick={() => setOpenMenu(false)}>CLOSE</button>
                        </div>
                    )}
                </div>
                <div className={styles.navBar}>
                    <p>{t('navBar.nav1')}</p>
                    <Link to={`/aboutus/`} className={styles.link}><p>{t('navBar.nav2')}</p></Link>
                    <p>{t('navBar.nav3')}</p>
                    <p>{t('navBar.nav4')}</p>
                </div>
                <div className={styles.infoContainer}>
                    <H1 heading={t('header.h1')} />
                    <P1
                        className={styles.p1}
                        text={t('header.p')} />
                    <div className={styles.buttonContainer}>
                        <FilledButton buttonText={t('header.button1')} />
                        <Link to={`/aboutus`} className={styles.link}><BorderButton buttonText={t('header.button2')} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header