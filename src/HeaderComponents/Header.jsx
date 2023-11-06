import "../Translation";
import { useTranslation } from "react-i18next";
import AfterHours from "../assets/AfterHours.svg"
import CoWorking from "../assets/CoWorking.svg"
import Gym from "../assets/Gym.svg"
import SpaWellness from "../assets/SpaWelness.svg"

export const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en" ? "sv" : "en";
        changeLanguage(newLanguage);
    };

    return (
        <div className="md:h-fit lg:bg-header relative bg-cover lg:h-screen sm:bg-header relative bg-cover h-screen" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/jlz1000_88870_photo-realistic_image_of_a_gym_with_a_lounge_area_ec9e24eb-e19b-46e7-8449-97ca3e3d8892_upscayl_4x_realesrgan-x4plus-anime.png?v=1698691615805)` }}>


            <div className="flex justify-center pt-2 flex-wrap sm:flex-nowrap items-center sm:justify-center md:justify-end">
                <img className="h-16 pr-3 lg:pr-7 lg:h-24" src={Gym} alt="" />
                <img className="h-16 lg:pr-9 lg:h-24" src={SpaWellness} alt="" />
                <img className="h-16 pr-3 lg:pr-7 lg:h-24" src={CoWorking} alt="" />
                <img className="h-16 pr-3 lg:pr-7 lg:h-24" src={AfterHours} alt="" />


            </div>

            <div className="ml-8 md:pr-44 lg:pr-0 lg:w-1/2 mx-16 pt-28">
                <h1 className="text-4xl text-left text-white md:text-6xl">
                    <span className="">{t("title")}</span> <span className="text-yellow-color">{t("title2")}</span>
                </h1>


                <h2 className="text-lg text-base md:pr-40 lg:pr-0 text-left text-white pt-9 md:text-lg lg:text-2xl">{t("description")}</h2>

                <h2 className="text-lg md:pr-40 lg:pr-0 text-base text-left text-white pt-9 md:text-lg md:pb-20 lg:text-2xl">
                    {t("description2")}
                </h2>

            </div>
        </div>
    );
};

