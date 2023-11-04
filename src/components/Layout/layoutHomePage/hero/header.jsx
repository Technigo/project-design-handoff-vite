import style from './Header.module.css';
import { Text } from "../../../UI/textAndTypography/Text";

export const Header = () => {
    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header="Yoga and meditation for women"
                    type="H1"
                    style={{ color: '#FFFFFF' }}
                />
                <Text
                    header="We help you stay vigorous in mind & body during menopause"
                    type="H2"
                    style={{ color: '#FFF', fontWeight: 500 }}
                />
                <button><Text
                    header="2 KNAPPER HER"
                    type="H2"
                    style={{ color: 'HOTPINK' }}
                /></button>
            </section>
        </div>
    );
};
