import { useTranslation } from 'react-i18next';
import { Button } from '../Links/Button';

export const SubscribeSection = () => {
    const { t } = useTranslation();

    return (
        <div className="subscribe-and-heading">
            <h2 className="footer-h2">{t("landingPage.footer.h2")}</h2>
            <div className="subscribe-input-fields">
                {/* There was no label in the sketch so I'll leave it commented out */}
                {/* <label htmlFor="email">{t("landingPage.footer.label")}</label> */}
                <input type="text" id="email" placeholder={t("landingPage.footer.label")} />
                <Button className={"green thin"} type="submit" text={t("landingPage.footer.button")} />
            </div>
        </div>
    )
}
