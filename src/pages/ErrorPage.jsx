import { Button } from "../components/Links/Button";
import { useTranslation } from "react-i18next";
import "./pages.css";

// Component for the Error (404) page
export const ErrorPage = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1 className="error-h1">{t("errorPage.h1")}</h1>
            <p>{t("errorPage.p")}</p>
            <Button linkTo={"/"} className={"brown thick"} text={t("errorPage.button")} />
        </section>
    )
}
