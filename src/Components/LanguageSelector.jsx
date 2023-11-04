import { useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState({name: t("footer.languageSelector.language")});

    const handleLanguageSelect = (languageKey, languageCode) => {
        setSelectedLanguage({name: t(`footer.languageSelector.${languageKey}`)});
        i18n.changeLanguage(languageCode);
    }

  return (
    <div>
        <ul>
            {t(`footer.languageSelector.language`)}
            <li onClick={() => handleLanguageSelect("english", "en")}>{t(`footer.languageSelector.english`)}</li>
            <li onClick={() => handleLanguageSelect("swedish", "se")}>{t(`footer.languageSelector.swedish`)}</li>
        </ul>
    </div>
  )
}
