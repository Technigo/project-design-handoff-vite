import { useTranslation } from "react-i18next";
import { KindCard } from "./KindCard";
import "./KindWords.css"

export const KindWords = () => {

    const { t, ready } = useTranslation();

    return (
        <section className="kindwords-section">
            <h2>{t("home.kindwords.heading")}</h2>
            <h3>{t("home.kindwords.subHeading")}</h3>
            <KindCard />
        </section>
    );
};
