import { Button } from "../Links/Button";
import "./subhero-component.css";
import { useTranslation } from "react-i18next";

// Component that renders the subhero-section, used on both the landing page and the about us page
export const SubHeroComponent = ({ text }) => {
    const { t } = useTranslation();

    return (
        <section className="text-section">
            <article className="article-section">
                <p className="subheader-text">{text}</p>
                <Button linkTo={"/about-us"} className={"grey thick"} text={t("landingPage.subhero.subheroButton")} />
            </article>
        </section>
    )
}
