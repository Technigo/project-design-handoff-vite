import styles from './Footer.module.css'
import chalkyLogoWhite from '../../assets/chalkyLogoWhite.svg'
import instagramIcon from '../../assets/instagramIcon.svg'
import facebookIcon from '../../assets/facebookIcon.svg'
import { P2 } from '../../reusableComponents/P2/P2.jsx'
import { useTranslation } from 'react-i18next'

const bodyText = {
    color: 'white',
    fontSize: '17px'
}

const boldText = {
    color: 'white',
    fontWeight: '600'
}

const color = {
    color: 'white'
}

export const Footer = () => {

const { t, i18n } = useTranslation();

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.contentWrapper}>
                    <img src={chalkyLogoWhite} alt="Chalky logo" />
                    <div className={styles.languages}>
                    <button onClick={() => i18n.changeLanguage('en')}>English</button>
                    <button onClick={() => i18n.changeLanguage('fi')}>Suomi</button>
                    </div>
                    <div className={styles.address}>
                        <P2 text={t('footer.p1')} style={bodyText} />
                        <P2 text={t('footer.p2')} style={bodyText} />
                    </div>
                    <div className={styles.openingHours}>
                        <P2 text={t('footer.p3')} style={boldText} />
                        <P2 text={t('footer.p4')} style={bodyText} />
                        <P2 text={t('footer.p5')} style={bodyText} />
                    </div>
                    <div className={styles.contactUs}>
                        <P2 text={t('footer.p6')} style={boldText} />
                        <P2 text={t('footer.p7')} style={bodyText} />
                        <P2 text={t('footer.p8')} style={bodyText} />
                    </div>
                    <div className={styles.icons}>
                        <img src={facebookIcon} alt="Facebook" />
                        <img src={instagramIcon} alt="Instagram" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer