import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './Courses.module.css';
import { Text } from '../../../UI/textAndTypography/Text';
import { CardCourseCarousel } from '../../../UI/carousels/ImageCarousel';
import { StyledButton } from '../../../UI/buttons/StyledButtons';

export const Courses = () => {
    const { t } = useTranslation();

    const dataCarousel = t("carousel", { returnObjects: true });
    console.log(dataCarousel);

    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header={t('courses.header')}
                    type="H2"
                    style={{ color: '#612E77' }}
                    className={style.gridItem1}
                />
                <Text
                    header={t('courses.subHeader')}
                    type="H2"
                    style={{ color: '#1D1C25', fontWeight: 500 }}
                    className={style.gridItem2}
                />
                <CardCourseCarousel>
                    {Object.entries(dataCarousel).map(([courseId, course]) => (
                        <div className={style.carouselcard} key={courseId}>
                            <img src={course.imgSrc} alt={t(course.altText)} className={style.img} />
                            <div className={style.cardTextWrapper}>
                                <Text
                                    header={t(course.description)}
                                    type="bodyText"
                                    style={{ marginBottom: '16px' }}
                                />
                                <Text
                                    header={t(course.details)}
                                    type="bodyText"
                                    style={{ marginBottom: '16px' }}
                                />
                            </div>
                            <StyledButton className={style.styledBtn}>
                                {t(course.buttonText)}
                            </StyledButton>
                        </div>
                    ))}
                </CardCourseCarousel>
            </section>
        </div>
    );
};
