import { useTranslation } from "react-i18next";
import "./pages.css";

// Placeholder-component for the Meet the Team page
export const MeetTheTeachers = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1>{t("otherPages.meetTheTeachers")}</h1>
        </section>
    )
}
