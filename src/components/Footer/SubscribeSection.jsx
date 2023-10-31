import { useTranslation } from 'react-i18next';

export const SubscribeSection = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t("landingPage.footer.h2")}</h2>
            <label htmlFor="email">{t("landingPage.footer.label")}</label>
            <input type="text" id="email" />
            <button type="submit">{t("landingPage.footer.button")}</button>
        </div>
    )
}
