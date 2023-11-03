import { useTranslation } from "react-i18next";
import "./pages.css";

// Placeholder-component for the FAQ page
export const Faq = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1>{t("otherPages.faq")}</h1>
        </section>
    )
}
