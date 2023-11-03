import { useTranslation } from "react-i18next";
import "./pages.css";

export const SignUp = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1>{t("otherPages.signUp")}</h1>
        </section>
    )
}
