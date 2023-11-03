import { useTranslation } from "react-i18next";
import "./pages.css";

export const AtHome = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1>{t("otherPages.atHome")}</h1>
        </section>
    )
}
