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
import { useTranslation } from 'react-i18next'

export const AboutUsHome = () => {

const { t } = useTranslation()

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <div className={styles.mainContainer}>
                <Link to={`/`}><img src={chalkyLogo} alt="Chalky logo" /></Link>
                <div className={menuStyles.hamburgerNav}>
                    {!openMenu && <button className={menuStyles.open} onClick={() => setOpenMenu(true)}><img src={menuButton} alt="Menu" /></button>}
                    {openMenu && (
                        <div className={menuStyles.menuContent}>
                            <P2 text={t('navBar.nav1')} />
                            <Link to={`/aboutus/`} className={styles.link}><P2 text={t('navBar.nav2')} /></Link>
                            <P2 text={t('navBar.nav3')} />
                            <P2 text={t('navBar.nav4')} />
                            <button className={menuStyles.close} onClick={() => setOpenMenu(false)}>{t('navBar.close')}</button>
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
                    <div className={styles.h1Container}>
                        <H1 heading={t('aboutUsHome.h1')} />
                    </div>
                    <P2 text={t('aboutUsHome.p1')} />
                    <P2 text={t('aboutUsHome.p2')} />
                    <P2 text={t('aboutUsHome.p3')} />
                    <H2 heading={t('aboutUsHome.h2')} />
                    <div className={styles.openingHours}>
                        <P1 text={t('aboutUsHome.op1')} />
                        <P1 text={t('aboutUsHome.op2')} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsHome