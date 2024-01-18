import styles from './Form.module.css'
import { H1 } from '../../reusableComponents/H1/H1.jsx'
import { P1 } from '../../reusableComponents/P1/P1.jsx'
import FilledButton from '../../reusableComponents/FilledButton/FilledButton.jsx'
import { useTranslation } from 'react-i18next'

export const Form = () => {

const { t } = useTranslation()

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.contentWrapper}>
                    <H1 heading={t('form.h1')} />
                    <P1
                        text={t('form.h3')} />
                    <div className={styles.formWrapper}>
                        <form>
                            <div className={styles.formInput}>
                                <label for="name">{t('form.input1')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder={t('form.ph1')} />
                            </div>
                            <div className={styles.formInput}>
                                <label for="email">{t('form.input2')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder={t('form.ph2')} />
                            </div>
                            <div className={styles.formInput}>
                                <label for="message">{t('form.input3')}</label>
                                <textarea
                                    id="message"
                                    placeholder={t('form.ph3')} />
                            </div>
                        </form>
                        <FilledButton buttonText={t('form.button')} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form