import { useTranslation } from "react-i18next";

// Placeholder-component for the Virtual Classes page
export const VirtualClasses = () => {
    const { t } = useTranslation();

    return (
        <section className="main-wrapper">
            <h1>{t("otherPages.virtualClasses")}</h1>
        </section>
    )
}

