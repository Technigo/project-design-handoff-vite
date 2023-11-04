import React from 'react';
import style from './Courses.module.css';
import { Text } from '../../../UI/textAndTypography/Text';
import { CardCourseCarousel } from '../../../UI/carousels/ImageCarousel';
import { StyledButton } from '../../../UI/buttons/StyledButtons';
import { dataCarousel } from '../../../../data/dataCarousel';


export const Courses = () => {
    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header="Courses coming up"
                    type="H2"
                    style={{ color: '#612E77' }}
                    className={style.gridItem1}
                />
                <Text
                    header="Our courses are designed
                    for improved health during
                    and after meno pause"
                    type="H2"
                    style={{ color: '#1D1C25', fontWeight: 500 }}
                    className={style.gridItem2}
                />
                <CardCourseCarousel className={style.carouselContainer}>
                    {dataCarousel.map((course) => (
                        <div className={style.carouselcard} key={course.id}>
                            <img src={course.imgSrc} alt={course.altText} className={style.img} />
                            <div className={style.cardTextWrapper}>
                                {course.textContent.map((text, index) => (
                                    <Text
                                        key={index}
                                        header={text.header}
                                        type={text.type}
                                        style={{ ...text.style, marginBottom: '16px' }}
                                    />
                                ))}
                            </div>
                            <StyledButton className={style.styledBtn}>
                                {course.buttonText}
                            </StyledButton>
                        </div>
                    ))}
                </CardCourseCarousel>
            </section>
        </div>
    );
};
