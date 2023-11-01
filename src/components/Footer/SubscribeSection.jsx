import { useTranslation } from 'react-i18next';
import { Button } from '../Links/Button';

export const SubscribeSection = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t("landingPage.footer.h2")}</h2>
            <label htmlFor="email">{t("landingPage.footer.label")}</label>
            <input type="text" id="email" />
            <Button className={"green thin"} type="submit" text={t("landingPage.footer.button")} />
        </div>
    )
}
