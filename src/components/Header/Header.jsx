import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.mainContainer}>
                <img src="src/assets/chalkyLogo.svg" alt="Chalky logo" />
                <img src="src/assets/heroImage.svg" alt="Chalky header image" />
            <div className={styles.infoContainer}>
                <div className={styles.headingContainer}>
                    <h1>Reach new heights with us!</h1>
                </div>
                <div className={styles.textContainer}>
                    <p>Whether you're a curious first-timer or a seasoned climber seeking new challenges, our dedicated team of experts is here to guide you every grip of the way.</p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.tryForFree}>TRY FOR FREE</button>
                    <button className={styles.aboutUs}>ABOUT US</button>
                </div>
            </div>
        </div>
    )
}

export default Header