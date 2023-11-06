import { useTranslation } from 'react-i18next';
import style from './FindUs.module.css';
import { Text } from "../../UI/textAndTypography/Text";


export const FindUs = () => {
    const { i18n } = useTranslation();

    // Denne funksjonen vil endre språket og bør være definert i komponentens rekkevidde
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <div className={style.findUsHeader}>
                    <Text
                        header="Find us"
                        type="H2"
                        style={{ color: '#612E77' }}
                    />
                </div>
                <div className={style.mapContainer}>
                    <iframe
                        title="YogaBalance Location"
                        src="https://www.google.com/maps/d/embed?mid=10s8TZ9K7aTypybxq4Mm6vhewLKsIjyI&ehbc=2E312F"
                        width="640"
                        height="480"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
                <div className={style.whereToFindUsText}>
                    <Text header="Address: Grycksbovägen 19A, Stockholm" type="bodyText" />
                    <Text header="Contact" type="bodyText" style={{ fontWeight: 700 }} />
                    <Text header="Mobile: +467000000" type="bodyText" />
                    <Text header="E-mail: info@yogabalance.se" type="bodyText" />
                </div>
                <div className={style.languageSelector}>


                    <div className={style.languageButtonsContainer}>
                        <button onClick={() => changeLanguage('en')} className={style.languageButton}>English</button>
                        <button onClick={() => changeLanguage('se')} className={style.languageButton}>Svenska</button>
                    </div></div>
            </section>
        </div>
    );
};
