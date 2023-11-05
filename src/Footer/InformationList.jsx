import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import "../Translation";
import { LanguageButton } from './LanguageButton';

export const InformationList = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en" ? "sv" : "en";
        changeLanguage(newLanguage);
    };
    return (
        <div className="grid grid-cols-2 place-content-evenly text-sm md:grid-cols-4 lg:pl-10 text-lg">
            <ul>
                <li><h2 className="font-bold">{t("information")}</h2></li>
                <li>{t("aboutUs")}</li>
                <li>{t("moreSearch")}</li>
                <li>{t("blog")}</li>
                <li>{t("testimonials")}</li>
                <li>{t("events")}</li>
            </ul>

            <ul>
                <li><h2 className="font-bold">{t("helpfulLinks")}</h2></li>
                <li>{t("services")}</li>
                <li>{t("support")}</li>
                <li>{t("terms")}</li>
                <li>{t("privacy")}</li>
            </ul>

            <ul>
                <li><h2 className="font-bold">{t("services")}</h2></li>
                <li>{t("brandsList")}</li>
                <li>{t("facilities")}</li>
                <li>{t("openingHours")}</li>
                <LanguageButton toggleLanguage={toggleLanguage} />
            </ul>

            <ul>
                <li><h2 className="font-bold">{t("contactUs")}</h2></li>
                <li>+46 001 89 89 10</li>
                <li>Facilities</li>
                <li>groundzero@support.com</li>
                <li><img className="h-9 invert" src="https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Footer%20buttons%20icons.svg?v=1698752738569" alt="Social Media Icons" />
                </li>

            </ul>
        </div>
    );
}
