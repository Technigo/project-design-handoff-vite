import style from './FindUS.module.css';
import { Text } from "../../UI/textAndTypography/Text";

export const FindUs = () => {
    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <Text
                    header="Find us"
                    type="H2"
                    style={{ color: '#612E77' }}
                />
                <Text
                    header="KART HER"
                    type="bodyText"
                    style={{ color: 'hotpink', fontWeight: 700 }}
                />
                <Text
                    header="Address: Grycksbovägen 19A, Stockholm"
                    type="bodyText"
                    style={{
                        color: '#1D1C25',
                    }}
                />
                <Text
                    header="Contact"
                    type="bodyText"
                    style={{
                        fontWeight: 700,
                        color: '#1D1C25',
                        lineHeight: '131%',
                        letterSpacing: '-0.374px'
                    }}
                />
                <Text
                    header={
                        <>
                            <div>Mobile: +467000000</div>
                            <div>E-mail: info@yogabalance.se</div>
                        </>
                    }
                    type="bodyText"
                    style={{ color: '#1D1C25' }}
                    className={style.mobileEmail}
                /><Text
                    header="Select language"
                    type="bodyText"
                    style={{
                        fontWeight: 700,
                        color: '#1D1C25'
                    }}
                />
                <Text
                    header="OVERSETTELSE HER"
                    type="bodyText"
                    style={{ color: 'hotpink', fontWeight: 700 }}
                />
            </section>
        </div>
    );
};
