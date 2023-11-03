import { useTranslation } from "react-i18next";
import "./pages.css";

// Component for the Classes page
export const Classes = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1>{t("otherPages.classes")}</h1>
        </section>
    )
}
