import { InstagramCarousel } from "./InstagramCarousel";
import { Button } from "../Button/Button"
import { AiFillInstagram } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import "./Instagram.css"


export const Instagram = () => {

    const { t } = useTranslation();
 
    return (
        <section className="instagram-section">
            <div className="instagram-content-wrapper">
            <h2>{t("home.instagram.heading")}</h2>
            <h3>{t("home.instagram.subHeading")}</h3>
            <InstagramCarousel />
            <div className="insta-btn-container">
            <Button>
                <AiFillInstagram className="insta-icon" alt="instagram"/> Connect on instagram
            </Button>
            </div>
            </div>
        </section>
    );
};
