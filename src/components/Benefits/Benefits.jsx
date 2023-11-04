import styles from './Benefits.module.css'

export const Benefits = () => {
    return (
        <>
        <div className={styles.mainContainer}>
            <h1>Benefits of climbing</h1>
            <div className={styles.benefitsList}>
                <ul>
                    <li> Improves overall body stregth</li>
                    <li> Endurance and flexibility</li>
                    <li> Problem-solving-thinking</li>
                    <li> Mindfulness and stress relief</li>
                </ul>
            </div>
            <button className={styles.ourPrograms}>OUR PROGRAMS</button>
            </div>
        </>
    )
}

export default Benefits