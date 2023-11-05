import style from './Testimonials.module.css';
import { Text } from "../../../UI/textAndTypography/Text";

export const Testimonials = () => {
    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header="What our clients say"
                    type="H2"
                    style={{ color: '#612E77' }}
                    className={style.testimonialsHeader}
                />
                <Text
                    header="Some kind words"
                    type="H2"
                    style={{ color: '#1D1C25', fontWeight: 500 }}
                    className={style.testimonialsKindWords}
                />
                <div className={style.firstTestimonialWrap}>
                    <img src="/Images/testimonialCloseup.png" alt="Client smiling" className={style.imgFirst} />
                    <Text
                        header="“I enjoy every moment at yoga balance so much. It makes me feel younger and more living. I highly recommend this for every women in menopause!”"
                        type="bodyText"
                        style={{ color: '#1D1C25' }}
                        className={style.textFirstTestimonial}
                    />
                </div>
                <div className={style.secondTestimonialWrap}>
                    <img src="/Images/testimonial.png" alt="Client drinking tea and smiling" className={style.imgSecond} />
                    <Text
                        header="“I can not live without my yoga classes at YogaBalance, it helps me find peace in mind and body.”"
                        type="bodyText"
                        style={{ color: '#1D1C25' }}
                        className={style.textSecondTestimonial}
                    />
                </div>
            </section>
        </div>
    );
};