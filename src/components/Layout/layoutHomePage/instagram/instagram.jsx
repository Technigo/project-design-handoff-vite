import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './Instagram.module.css';
import { Text } from "../../../UI/textAndTypography/Text";
import { StyledButton } from '../../../UI/buttons/StyledButtons';

export const Instagram = () => {
    const { t } = useTranslation();

    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header={t('instagram.followUs')}
                    type="H2"
                    style={{ color: '#FFFFFF' }}
                    className={style.gridItem1}
                />
                <Text
                    header={t('instagram.connect')}
                    type="H2"
                    style={{ color: '#FFF', fontWeight: 500 }}
                    className={style.gridItem2}
                />

                {/* Scroll Carousel */}
                <div className={style.instaCarousel}>
                    <img src="/Images/instagram1.jpeg" alt={t('instagram.images.img1.alt')} className={style.instaImage} />
                    <img src="/Images/instagram2.jpeg" alt={t('instagram.images.img2.alt')} className={style.instaImage} />
                    <img src="/Images/instagram3.jpeg" alt={t('instagram.images.img3.alt')} className={style.instaImage} />
                    <img src="/Images/instagram4.jpeg" alt={t('instagram.images.img4.alt')} className={style.instaImage} />
                </div>

                <StyledButton style={{
                    display: 'flex',
                    width: "275px",
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px 10px',
                }}>
                    <img
                        src="/Images/instagramLogo.png"
                        alt={t('instagram.logoAlt')}
                        style={{
                            width: '61.851px',
                            height: '65px',
                            marginLeft: '-30px',
                            marginRight: '0px',
                        }}
                    />
                    <span style={{
                        whiteSpace: 'nowrap',

                    }}>
                        {t('instagram.connectButton')}
                    </span>
                </StyledButton>
            </section >
        </div >
    );
};
