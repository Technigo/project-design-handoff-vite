import style from "./Founder.module.css"
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../../../UI/textAndTypography/Text';

export const Founder = () => {

    const { t } = useTranslation();

    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <section className={style.textWrapper}>
                    <Text
                        header={t('ourFounder.title')}
                        type="H2"
                        style={{ color: '#612E77' }}
                        $width="200px"
                        $height="50px"
                        className={style.Texth1}
                    />
                    <Text
                        header={t('ourFounder.subtitle')}
                        type="subheading"
                        style={{ color: '#1D1C25', fontWeight: 300 }}
                        className={style.Texth2}
                    />
                    <img
                        className={style.founderImage}
                        src="/Images/ImageOurFounder.png"
                        alt={t('ourFounder.altText')}
                    />
                    <Text
                        header={t('ourFounder.description')}
                        type="bodyText"
                        style={{ color: '#1D1C25', fontWeight: 300 }}
                        className={style.Texth2}
                    />
                </section>
            </section>
        </div >
    );
};
