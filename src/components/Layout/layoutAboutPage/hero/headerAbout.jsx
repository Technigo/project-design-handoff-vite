import styles from "./header.module.css"
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../../../UI/textAndTypography/Text';
import { MobileSpecificButton } from '../../../UI/buttons/MobileSpecificButton';

export const HeaderAbout = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.background}>
            <section className={styles.wrapper}>
                <img
                    className={styles.heroimage}
                    src="/Images/HeroImageContactPage.png"
                    alt={t('headerAbout.heroImageAlt')}//No description yet I think
                />
                <section className={styles.textWrapper}>
                    <Text
                        header={t('headerAbout.titleAbout')}
                        type="H1"
                        style={{ color: '#FFFFFF' }}
                        $width="200px"
                        $height="50px"
                        className={styles.Texth1}
                    />
                    <Text
                        header={t('headerAbout.subtitleAbout')}
                        type="subheading"
                        style={{ color: '#FFF', fontWeight: 300 }}
                        className={styles.Texth2}
                    />
                    <section className={styles.contactUsBtn}>
                        <MobileSpecificButton
                            className={styles.contactUsBtn}
                        >
                            {t('headerAbout.contactUsBtn')}
                        </MobileSpecificButton>
                    </section>
                </section>
            </section>
        </div >
    );
};