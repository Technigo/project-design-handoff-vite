import style from './Instagram.module.css';
import { Text } from "../../../UI/textAndTypography/Text";

export const Instagram = () => {
    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header="Follow us on Instagram"
                    type="H2"
                    style={{ color: '#FFFFFF' }}
                    className={style.gridItem1}
                />
                <Text
                    header="Connect and keep inspired"
                    type="H2"
                    style={{ color: '#FFF', fontWeight: 500 }}
                    className={style.gridItem2}
                />
                <p>Bildekarusell insta</p>
                <button><Text
                    header="1 KNAPP"
                    type="H2"
                    style={{ color: 'HOTPINK' }}
                    className={style.gridItem4}
                /></button>
            </section>
        </div>
    );
};