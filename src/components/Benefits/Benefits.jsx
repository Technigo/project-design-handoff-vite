import styles from './Benefits.module.css'
import { H1 } from '../../reusableComponents/H1/H1.jsx'
import { BorderButton } from '../../reusableComponents/BorderButton/BorderButton.jsx'

export const Benefits = () => {
    return (
        <>
        <div className={styles.mainContainer}>
            <H1 heading="Benefits of climbing" />
            <div className={styles.benefitsList}>
                <ul>
                    <li> Improves overall body stregth</li>
                    <li> Endurance and flexibility</li>
                    <li> Problem-solving-thinking</li>
                    <li> Mindfulness and stress relief</li>
                </ul>
            </div>
            <BorderButton buttonText="OUR PROGRAMS" />
            </div>
        </>
    )
}

export default Benefits