import styles from './Footer.module.css'
import chalkyLogoWhite from '../../assets/chalkyLogoWhite.svg'
import instagramIcon from '../../assets/instagramIcon.svg'
import facebookIcon from '../../assets/facebookIcon.svg'
import languagesIcon from '../../assets/languagesIcon.svg'
import { P2 } from '../../reusableComponents/P2/P2.jsx'

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
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.contentWrapper}>
                    <img src={chalkyLogoWhite} alt="Chalky logo" />
                    <div className={styles.languages}>
                        <img src={languagesIcon} alt="Languages" />
                    </div>
                    <div className={styles.address}>
                        <P2 text="Bäckvägen" style={bodyText} />
                        <P2 text="(T-Bana) Örnsberg" style={bodyText} />
                    </div>
                    <div className={styles.openingHours}>
                        <P2 text="Opening hours" style={boldText} />
                        <P2 text="Mon-Fri 7:30-22:00" style={bodyText} />
                        <P2 text="Sat-Sun 10:00-20:00" style={bodyText} />
                    </div>
                    <div className={styles.contactUs}>
                        <P2 text="Contact us" style={boldText} />
                        <P2 text="hello@chalky.com" style={bodyText} />
                        <P2 text="(+46) 70-99 29 29" style={bodyText} />
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