import styles from './CTA.module.css'

export const SafetyCTA = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentWrapper}>
                <img src='src/assets/safetyIcon.svg' alt="Safety first" />
                <h2>Safety first</h2>
                <p>Safety is our top priority at Chalky and we’re always here to make you feel safe while climbing. Our team of certified climbing instructors is dedicated to guiding and educating climbers, from beginners to advanced, on safe climbing techniques.</p>
            </div>
        </div>
    )
}

export default SafetyCTA