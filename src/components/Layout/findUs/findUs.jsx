import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import style from './FindUs.module.css';
import { Text } from "../../UI/textAndTypography/Text";

export const FindUs = () => {
    const { t, i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);
    console.log(i18n.language);
    console.log(`Current language is: ${i18n.language}`);
    console.log(`Translation for 'findUs.languages.en': ${t('findUs.languages.en')}`);
    console.log(`Translation for 'findUs.languages.se': ${t('findUs.languages.se')}`);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setShowDropdown(false);
    };

    const getFlagIcon = (language) => {
        switch (language) {
            case 'en':
                return "/Images/united-kingdom.png"; // Path to your English flag image
            case 'se':
                return "/Images/sweden-flag.png"; // Path to your Swedish flag image
            default:
                return "/Images/default-flag.png"; // Path to a default flag image if needed
        }
    };
    return (
        <div className={style.background}>
            <section className={style.wrapper}>
                <div className={style.findUsHeader}>
                    <Text
                        header={t('findUs.header')}
                        type="H2"
                        style={{ color: '#612E77' }}
                    />
                </div>
                <div className={style.mapContainer}>
                    <iframe
                        title={t('findUs.mapTitle')}
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
                    <Text header={t('findUs.address')} type="bodyText" />
                    <Text header={t('findUs.contactHeader')} type="bodyText" style={{ fontWeight: 700 }} />
                    <Text header={t('findUs.mobile')} type="bodyText" />
                    <Text header={t('findUs.email')} type="bodyText" />
                </div>
                <div className={style.languageSelector}>


                    <div className={style.dropdown}>
                        <button onClick={() => setShowDropdown(!showDropdown)} className={style.dropbtn}>
                            <img
                                src={getFlagIcon(i18n.language)}
                                alt={t('findUs.languages.' + i18n.language)}
                                className={style.icon}
                            />
                            {t('findUs.languages.' + i18n.language)}
                        </button>
                        {showDropdown && (
                            <div className={style.dropdownContent}>
                                {i18n.language !== 'en' && (
                                    <span onClick={() => changeLanguage('en')}>
                                        <img src="/Images/united-kingdom.png" alt="UK Flag" className={style.icon} />
                                        {t('findUs.languages.en')}
                                    </span>
                                )}
                                {i18n.language !== 'se' && (
                                    <span onClick={() => changeLanguage('se')}>
                                        <img src="/Images/sweden-flag.png" alt="Sweden Flag" className={style.icon} />
                                        {t('findUs.languages.se')}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>

    );
};
