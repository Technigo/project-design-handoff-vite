import styles from './CTA.module.css'
import { H2 } from '../../reusableComponents/H2/H2.jsx'
import { P2 } from '../../reusableComponents/P2/P2.jsx'
import safetyIcon from '../../assets/safetyIcon.svg'
import { useTranslation } from 'react-i18next'

const inlineStyles = {
    color: 'white'
}

export const SafetyCTA = () => {

const { t, i18n } = useTranslation();

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.contentWrapper}>
                    <img src={safetyIcon} alt="Safety first" />
                    <H2
                        heading={t('cta2.h2')}
                        style={inlineStyles}
                    />
                    <P2
                        text={t('cta2.p')}
                        style={inlineStyles}
                    />
                </div>
            </div>
        </>
    )
}

export default SafetyCTA