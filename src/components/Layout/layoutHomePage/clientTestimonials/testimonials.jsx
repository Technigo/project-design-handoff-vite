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
                />
                <Text
                    header="Some kind words"
                    type="H2"
                    style={{ color: '#1D1C25', fontWeight: 500 }}
                />
                <p>bilde</p>
                <Text
                    header="“I enjoy every moment at yoga balance so much. It makes me feel younger and more living. I highly recommend this for every women in menopause!”"
                    type="bodyText"
                    style={{ color: '#1D1C25' }}
                />
                <p>bilde</p>
                <Text
                    header="“I enjoy every moment at yoga balance so much. It makes me feel younger and more living. I highly recommend this for every women in menopause!”"
                    type="bodyText"
                    style={{ color: '#1D1C25' }}
                />
            </section>
        </div>
    );
};