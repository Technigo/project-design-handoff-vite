import { useTranslation } from "react-i18next";
import "./pages.css";

export const Studio = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1>{t("otherPages.studio")}</h1>
        </section>
    )
}

