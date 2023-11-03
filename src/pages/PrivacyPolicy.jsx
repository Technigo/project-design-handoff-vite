import { useTranslation } from "react-i18next";
import "./pages.css";

export const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1>{t("otherPages.privacyPolicy")}</h1>
        </section>
    )
}
