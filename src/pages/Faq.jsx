import { useTranslation } from "react-i18next";
import "./pages.css";

export const Faq = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1>{t("otherPages.faq")}</h1>
        </section>
    )
}
