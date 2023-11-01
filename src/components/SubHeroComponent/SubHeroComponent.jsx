import { Button } from "../Links/Button";
import "./subhero-component.css";
import { useTranslation } from "react-i18next";

export const SubHeroComponent = ({ text }) => {
    const { t } = useTranslation();

    return (
        <section className="text-section">
            <article className="article-section">
                <p className="subheader-text">{text}</p>
                <Button className={"grey thick"} text={t("landingPage.subhero.subheroButton")} />
            </article>
        </section>
    )
}
