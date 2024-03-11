import React, { useState, useEffect } from 'react';
import styles from './founder.module.css'
import { useTranslation } from 'react-i18next';
import { Text } from '../../../UI/textAndTypography/Text';

export const Founder = () => {

    const { t } = useTranslation();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.background}>
            <section className={styles.wrapper}>
                <section className={styles.textWrapper}>
                    <Text
                        header={t('ourFounder.title')}
                        type="H2"
                        style={{ color: '#612E77' }}
                        $width="200px"
                        $height="50px"
                        className={styles.Texth1}
                    />
                    <Text
                        header={t('ourFounder.subtitle')}
                        type="subheading"
                        style={{ color: '#1D1C25', fontWeight: 300 }}
                        className={styles.TextHeaderh2}
                    />
                    <img
                        className={`${styles.founderImage} ${styles.founderImageMobile}`}
                        src="/Images/Founder.png"
                        alt={t('ourFounder.altText')}
                    />
                    <img
                        className={`${styles.founderImage} ${styles.founderImageTablet}`}
                        src="/Images/Founder2.png"
                        alt={t('ourFounder.altText')}
                    />


                    <Text
                        header={t('ourFounder.description')}
                        type="bodyText"
                        style={{ color: '#1D1C25', fontWeight: 300 }}
                        className={styles.Texth2}
                    />
                </section>
            </section>
        </div >
    );
};
