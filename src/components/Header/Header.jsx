import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { H1 } from '../../reusableComponents/H1/H1.jsx'
import { P1 } from '../../reusableComponents/P1/P1.jsx'
import { FilledButton } from '../../reusableComponents/FilledButton/FilledButton.jsx'
import { BorderButton } from '../../reusableComponents/BorderButton/BorderButton.jsx'

export const Header = () => {
    return (
        <div className={styles.mainContainer}>
            <img src="src/assets/chalkyLogo.svg" alt="Chalky logo" />
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
                    <BorderButton buttonText="ABOUT US" />
                </div>
            </div>
        </div>
    )
}

export default Header