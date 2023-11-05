import { Link, useNavigate } from "react-router-dom";
import { NavigationMenu } from "../NavigationComponents/NavigationMenu";
import { AboutText } from "./AboutText";
import { Footer } from "../Footer/Footer";
import { VisitUs } from "./VisitUs";
import BackIcon from "../assets/Back.svg"
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import "../Translation";

export const About = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en" ? "sv" : "en";
        changeLanguage(newLanguage);
    };

    //navigate to home page
    const navigate = useNavigate();

    const backButton = () => {
        navigate("/");
    };



    return (
        <div className="flex flex-col">

            <div className="flex flex-col border-2">

                <div className="flex justify-center items-center h-24">
                    <button className="hover:shadow-yellow-box hover:border-2 border-black absolute p-2 flex left-10" type="button" onClick={backButton}>
                        <img className="pt-1" src={BackIcon} alt="" />
                        {t("homeButton")}
                    </button>
                    <NavigationMenu />
                </div>
            </div>


            <div className="relative bg-header bg-cover h-auto w-full lg:h-screen" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Rectangle%20357.png?v=1698745283957)` }}>
                <AboutText />
                <VisitUs />
                <Footer />
            </div>
        </div>
    );
};
