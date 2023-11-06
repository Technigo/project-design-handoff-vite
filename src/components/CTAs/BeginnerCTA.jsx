import styles from './CTA.module.css'
import { H2 } from '../../reusableComponents/H2/H2.jsx'
import { P2 } from '../../reusableComponents/P2/P2.jsx'
import beginnerIcon from '../../assets/beginnerIcon.svg'

const inlineStyles = {
    color: 'white'
}

export const BeginnerCTA = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.contentWrapper}>
                    <img src={beginnerIcon} alt="Beginner's program" />
                    <H2
                        heading="Beginner's program"
                        style={inlineStyles}
                    />
                    <P2
                        text="Our beginner's program is designed for those who want to get a thorough start and have the confidence and knowledge to get started with climbing in a safe and friendly environment."
                        style={inlineStyles}
                    />
                </div>
            </div>
        </>
    )
}

export default BeginnerCTA