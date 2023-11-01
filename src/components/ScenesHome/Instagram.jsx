import { AiFillInstagram } from "react-icons/ai";

export const Instagram = () => {
    return (
        <section className="instagram-section">
            <h4>Follow us on Instagram</h4>
            <h5>Connect and keep inspired</h5>
            <p>HERE IS AN ARRAY OF IMAGES</p>
            <button>
                <AiFillInstagram className="insta-icon" /> Connect on instagram
            </button>
        </section>
    );
};
