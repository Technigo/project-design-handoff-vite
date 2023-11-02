import { InstagramCarousel } from "./InstagramCarousel";
import { Button } from "../Button/Button"
import { AiFillInstagram } from "react-icons/ai";
import "./Instagram.css"


export const Instagram = () => {
    return (
        <section className="instagram-section">
            <div className="instagram-content-wrapper">
            <h2>Follow us on Instagram</h2>
            <h3>Connect and keep inspired</h3>
            <InstagramCarousel />
            <Button>
                <AiFillInstagram className="insta-icon" /> Connect on instagram
            </Button>
            </div>
        </section>
    );
};
