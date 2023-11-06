import styles from './CTA.module.css'
import { H2 } from '../../reusableComponents/H2/H2.jsx'
import { P2 } from '../../reusableComponents/P2/P2.jsx'
import safetyIcon from '../../assets/safetyIcon.svg'

const inlineStyles = {
    color: 'white'
}

export const SafetyCTA = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.contentWrapper}>
                    <img src={safetyIcon} alt="Safety first" />
                    <H2
                        heading="Safety first"
                        style={inlineStyles}
                    />
                    <P2
                        text="Safety is our top priority at Chalky and we’re always here to make you feel safe while climbing. Our team of certified climbing instructors is dedicated to guiding and educating climbers, from beginners to advanced, on safe climbing techniques."
                        style={inlineStyles}
                    />
                </div>
            </div>
        </>
    )
}

export default SafetyCTA