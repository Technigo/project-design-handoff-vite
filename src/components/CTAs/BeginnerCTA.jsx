import styles from './CTA.module.css'
import { H2 } from '../../reusableComponents/H2/H2.jsx'
import { P2 } from '../../reusableComponents/P2/P2.jsx'
import beginnerIcon from '../../assets/beginnerIcon.svg'
import { useTranslation } from 'react-i18next'

const inlineStyles = {
    color: 'white'
}

export const BeginnerCTA = () => {

    const { t, i18n } = useTranslation();

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.contentWrapper}>
                    <img src={beginnerIcon} alt="Beginner's program" />
                    <H2
                        heading={t('cta1.h2')}
                        style={inlineStyles}
                    />
                    <P2
                        text={t('cta1.p')}
                        style={inlineStyles}
                    />
                </div>
            </div>
        </>
    )
}

export default BeginnerCTA