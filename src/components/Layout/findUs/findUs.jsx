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
                    className={style.findUsHeader}
                />
                <div className={style.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=10s8TZ9K7aTypybxq4Mm6vhewLKsIjyI&ehbc=2E312F&noprof=1"
                        width="640"
                        height="480"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
                <div className={style.whereToFindUsText}>
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
                </div>
                <Text
                    header="OVERSETTELSE HER"
                    type="bodyText"
                    style={{ color: 'hotpink', fontWeight: 700 }}
                    className={style.translationBox}
                />
            </section>
        </div>
    );
};
