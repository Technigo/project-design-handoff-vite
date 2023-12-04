import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './Testimonials.module.css';
import { Text } from '../../../UI/textAndTypography/Text';

export const Testimonials = () => {
    const { t } = useTranslation();


    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header={t('testimonials.header')}
                    type="H2"
                    style={{ color: '#612E77' }}
                    className={style.testimonialsHeader}
                />
                <Text
                    header={t('testimonials.subHeader')}
                    type="H2"
                    style={{ color: '#1D1C25', fontWeight: 500 }}
                    className={style.testimonialsKindWords}
                />
                <div className={style.firstTestimonialWrap}>
                    <div className={style.imgWrap}>
                        <img
                            src="/Images/testimonialCloseup.png"
                            alt={t('testimonials.firstTestimonialAlt')}
                            className={style.imgFirst}
                        />
                    </div>
                    <Text
                        header={t('testimonials.firstTestimonial')}
                        type="bodyText"
                        style={{ color: '#1D1C25' }}
                        className={style.textFirstTestimonial}
                    />
                </div>
                <div className={style.secondTestimonialWrap}>
                    <div className={style.imgWrap}>
                        <img
                            src="/Images/testimonial.png"
                            alt={t('testimonials.secondTestimonialAlt')}
                            className={style.imgSecond}
                        />
                    </div>
                    <Text
                        header={t('testimonials.secondTestimonial')}
                        type="bodyText"
                        style={{ color: '#1D1C25' }}
                        className={style.textSecondTestimonial}
                    />
                </div>
            </section>
        </div>
    );
};
