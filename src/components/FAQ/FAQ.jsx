import styles from './FAQ.module.css'
import { H1 } from '../../reusableComponents/H1/H1.jsx'
import { P2 } from '../../reusableComponents/P2/P2.jsx'
import BorderButton from '../../reusableComponents/BorderButton/BorderButton.jsx'
import FAQimg from '../../assets/FAQimg.svg'
import { useTranslation } from 'react-i18next'

export const FAQ = () => {

const { t, i18n } = useTranslation();

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.image}>
                    <img src={FAQimg} alt="Climbing man" />
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContainer}>
                        <H1 heading={t('faq.h1')} />
                        <P2 text={t('faq.p1')} />
                        <P2 text={t('faq.p2')} />
                    </div>
                    <div className={styles.buttonContainer}>
                        <BorderButton buttonText={t('faq.button')} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ