import "../Translation";
import { useTranslation } from "react-i18next";


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

            <img className="sm:mx-auto block h-14 top-4 lg:h-28 absolute top-10 right-6 mx-16 text-center" src="https://cdn.glitch.me/be758d61-a981-49f2-a7a6-72216e478708/Insta%20story%20cirkles.svg?v=1698689442566" alt="Story Circles" />

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

