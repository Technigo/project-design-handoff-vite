import style from "./header.module.css"
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../../../UI/textAndTypography/Text';
import { StyledButton } from '../../../UI/buttons/StyledButtons';
import { MobileSpecificButton } from '../../../UI/buttons/MobileSpecificButton';

export const HeaderAbout = () => {
    const { t } = useTranslation();

    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <img
                    className={style.heroimage}
                    src="/Images/HeroImageContactPage.png"
                    alt={t('headerAbout.heroImageAlt')}//No description yet I think
                />
                <section className={style.textWrapper}>
                    <Text
                        header={t('headerAbout.titleAbout')}
                        type="H1"
                        style={{ color: '#FFFFFF' }}
                        $width="200px"
                        $height="50px"
                        className={style.Texth1}
                    />
                    <Text
                        header={t('headerAbout.subtitleAbout')}
                        type="subheading"
                        style={{ color: '#FFF', fontWeight: 300 }}
                        className={style.Texth2}
                    />
                    <section className={style.contactUsBtn}>
                        <MobileSpecificButton
                            className={style.contactUsBtn}
                        >
                            {t('headerAbout.contactUsBtn')}
                        </MobileSpecificButton>
                    </section>
                </section>
            </section>
        </div >
    );
};