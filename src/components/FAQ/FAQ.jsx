import styles from './FAQ.module.css'
import { H1 } from '../../reusableComponents/H1/H1.jsx'
import { P2 } from '../../reusableComponents/P2/P2.jsx'
import BorderButton from '../../reusableComponents/BorderButton/BorderButton.jsx'
import FAQimg from '../../assets/FAQimg.svg'

export const FAQ = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.image}>
                    <img src={FAQimg} alt="Climbing man" />
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContainer}>
                        <H1 heading="Find out more in our FAQ" />
                        <P2
                            text="We know that stepping outside your comfort zone is scary 
                            and you might have a lot of questions about the world of climbing." />
                        <P2 text="We have collected some of the most common beginner questions in our FAQ." />
                    </div>
                    <div className={styles.buttonContainer}>
                        <BorderButton buttonText="READ OUR FAQ" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ