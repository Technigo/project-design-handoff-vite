import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.contentWrapper}>
                    <div className={styles.row1}>
                        <img src="src/assets/chalkyLogoWhite.svg" alt="Chalky logo" />
                        <p>Language</p>
                    </div>
                    <div className={styles.row2}>
                        <div>
                            <p>Bäckvägen 34</p>
                            <p>(T-bana) Örnsberg</p>
                        </div>
                        <div>
                            <p>Opening hours</p>
                            <p>Mon-Fri 7:30-22:00</p>
                            <p>Sat-Sun 10:00-20:00</p>
                        </div>
                    </div>
                    <div className={styles.row3}>
                        <div>
                            <p>Contact us</p>
                            <p>hello@chalky.com</p>
                            <p>(+46) 70-99 29 29</p>
                        </div>
                        <div className={styles.icons}>
                            <img src="src/assets/facebookIcon.svg" alt="Facebook" />
                            <img src="src/assets/instagramIcon.svg" alt="Instagram" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer