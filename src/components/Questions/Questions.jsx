import styles from './Questions.module.css'
import { H1 } from '../../reusableComponents/H1/H1.jsx'
import gotQuestions from '../../assets/gotQuestions.svg'
import { P1 } from '../../reusableComponents/P1/P1.jsx'
import { P2 } from '../../reusableComponents/P2/P2.jsx'
import { FilledButton } from '../../reusableComponents/FilledButton/FilledButton.jsx'
import { BorderButton } from '../../reusableComponents/BorderButton/BorderButton.jsx'

const inlineStyles = {
    fontWeight: '600'
}

export const Questions = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <img src={gotQuestions} alt="Got questions?" />
                <div className={styles.componentWrapper}>
                    <div className={styles.textContainer}>
                        <H1 heading="Got questions?" />
                        <P1
                            text="What is the best way to get started with climbing?"
                            style={inlineStyles}
                        />
                        <P2
                            text="We know that stepping outside your comfort zone is 
                            scary and you might have a lot of questions about the world of climbing." />
                        <P2
                            text="We have collected some of the most common beginner questions in our FAQ." />
                        <FilledButton buttonText="READ OUR FAQ" />
                    </div>
                    <div className={styles.benefits}>
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
                </div>
            </div>
        </>
    )
}

export default Questions