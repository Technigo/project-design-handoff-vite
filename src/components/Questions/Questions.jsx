import styles from './Questions.module.css'
import { H1 } from '../../reusableComponents/H1/H1.jsx'
import gotQuestions from '../../assets/gotQuestions.svg'
import { P1 } from '../../reusableComponents/P1/P1.jsx'
import { P2 } from '../../reusableComponents/P2/P2.jsx'
import { FilledButton } from '../../reusableComponents/FilledButton/FilledButton.jsx'
import { BorderButton } from '../../reusableComponents/BorderButton/BorderButton.jsx'
import { useTranslation } from 'react-i18next'

const inlineStyles = {
    fontWeight: '600'
}

export const Questions = () => {

const { t, i18n } = useTranslation();

    return (
        <>
            <div className={styles.mainContainer}>
                <img src={gotQuestions} alt="Got questions?" />
                <div className={styles.componentWrapper}>
                    <div className={styles.textContainer}>
                        <H1 heading={t('questions.h1')} />
                        <P1
                            text={t('questions.h2')}
                            style={inlineStyles}
                        />
                        <P2
                            text={t('questions.p1')} />
                        <P2
                            text={t('questions.p2')} />
                        <FilledButton buttonText={t('questions.button')} />
                    </div>
                    <div className={styles.benefits}>
                        <H1 heading={t('benefits.h1')} />
                        <div className={styles.benefitsList}>
                            <ul>
                                <li> {t('benefits.li1')}</li>
                                <li> {t('benefits.li2')}</li>
                                <li> {t('benefits.li3')}</li>
                                <li> {t('benefits.li4')}</li>
                            </ul>
                        </div>
                        <BorderButton buttonText={t('benefits.button')} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Questions