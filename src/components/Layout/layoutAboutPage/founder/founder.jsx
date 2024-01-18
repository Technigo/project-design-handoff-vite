import React, { useState, useEffect } from 'react';
import style from "./Founder.module.css"
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
                        className={style.TextHeaderh2}
                    />
                    <img
                        className={`${style.founderImage} ${style.founderImageMobile}`}
                        src="/Images/Founder.png"
                        alt={t('ourFounder.altText')}
                    />
                    <img
                        className={`${style.founderImage} ${style.founderImageTablet}`}
                        src="/Images/Founder2.png"
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
