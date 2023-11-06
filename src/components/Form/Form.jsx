import styles from './Form.module.css'
import { H1 } from '../../reusableComponents/H1/H1.jsx'
import { P1 } from '../../reusableComponents/P1/P1.jsx'
import FilledButton from '../../reusableComponents/FilledButton/FilledButton.jsx'

export const Form = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.contentWrapper}>
                    <H1 heading="Share your thoughts with us" />
                    <P1
                        text="Our dedicated team is always happy to help so don’t hesitate to reach out to us with any questions you might have." />
                    <div className={styles.formWrapper}>
                        <form>
                            <div className={styles.formInput}>
                                <label for="name">NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Input your name*" />
                            </div>
                            <div className={styles.formInput}>
                                <label for="email">E-MAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="mail@yourmail.com*" />
                            </div>
                            <div className={styles.formInput}>
                                <label for="message">MESSAGE</label>
                                <textarea
                                    id="message"
                                    placeholder="What can we help you with?*" />
                            </div>
                        </form>
                        <FilledButton buttonText="SEND MESSAGE" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form