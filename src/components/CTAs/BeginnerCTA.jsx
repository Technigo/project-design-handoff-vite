import styles from './CTA.module.css'

export const BeginnerCTA = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentWrapper}>
                <img src='src/assets/beginnerIcon.svg' alt="Beginner's program" />
                <h2>Beginner's program</h2>
                <p>Our beginner's program is designed for those who want to get a thorough start and have the confidence and knowledge to get started with climbing in a safe and friendly environment.</p>
            </div>
        </div>
    )
}

export default BeginnerCTA