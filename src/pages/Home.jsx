import HeaderPhoto from "../assets/header-photo.png";
import iPhone from "../assets/iphone.png";
import Yoga from "../assets/yoga.png";
import AppstoreDark from "../assets/app-store-dark.svg?react";
import AppstoreLight from "../assets/app-store-light.svg?react";
import GooglePlayDark from "../assets/google-play-dark.svg?react";
import GooglePlayLight from "../assets/google-play-light.svg?react";
import RightArrow from "../assets/right-arrow.svg?react";
import LeftArrow from "../assets/left-arrow.svg?react";
import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    const classes = [
        t("coreFlex"),
        t("preNatal"),
        t("postNatal"),
        t("foundation"),
        t("breathWork"),
        t("intensity"),
        t("classes"),
    ];

    const benefits = [
        t("coreStrength"),
        t("increasedEnergy"),
        t("flexibilityAndMobility"),
        t("balance"),
        t("posture"),
    ];

    return (
        <>
            <section className="relative">
                <img
                    className="w-full object-cover min-h-[400px]"
                    src={HeaderPhoto}
                />
                <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md" />
                <div className="absolute inset-0 flex items-center px-4 lg:px-32">
                    <div className="w-2/3 md:w-1/3">
                        <h1 className="font-bold text-white-n text-2xl w-32 mb-4">{t("heading")}</h1>
                        <h2 className="semi-bold text-white-n text-lg mb-6">{t("subheading")}</h2>
                        <button className="font-bold text-white-n bg-blue-n px-8 py-3 rounded-full hover:bg-beige-n hover:text-blue-n hover:underline underline-offset-2 transition-all ease-out duration-300">{t("joinTheMovement")}</button>
                    </div>
                </div>
            </section>
            <section className="py-4 border-y-4 border-green-n overflow-hidden">
                <p className={`text-md font-bold whitespace-nowrap ${styles.scroll}`}>{`${t("classes")}: ${[...classes, ...classes].join("  •  ")}`}</p>
            </section>
            <section className="flex flex-col md:flex-row px-4 py-8 gap-4">
                <div className="flex mb-4 md:mb-0">
                    <img
                        className="w-1/2 object-contain"
                        src={iPhone}
                        alt="Photo of an iPhone"
                    />
                    <div className="flex items-center">
                        <div>
                            <p className="text-lg -ms-12 mb-4 text-xl">{t("tailoredLevels")}</p>
                            <p className="text-lg mb-4 text-xl">{t("lowImpact")}</p>
                            <p className="text-lg ps-12 text-xl">{t("certifiedInstructors")}</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <h1 className="text-3xl">
                        <span>{t("unlock")}</span>
                        <b>{t("hundredClasses")}</b>
                        <span>{t("andStart")}</span>
                        <b>{t("movingOnTheMove")}</b>
                    </h1>
                    <div className="flex flex-col justify-center">
                        <div className={`mb-4 cursor-pointer ${styles.downloads}`}>
                            <AppstoreDark className={styles.dark} />
                            <AppstoreLight className={styles.light} />
                        </div>
                        <div className={`mb-4 cursor-pointer ${styles.downloads}`}>
                            <GooglePlayDark className={styles.dark} />
                            <GooglePlayLight className={styles.light} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 border-y-4 border-green-n overflow-hidden">
                <p className={`text-md font-bold whitespace-nowrap ${styles.scroll}`}>{`${t("benefits")}: ${[...benefits, ...benefits].join("  •  ")}`}</p>
            </section>
            <section className="px-8 py-12 flex items-center flex-col md:flex-row gap-8">
                <img className="max-w-[317px] md:max-w-[337px] lg:max-w-[550px] mb-8" src={Yoga} alt="Doing yoga" />
                <div className="flex items-center">
                    <div className="flex flex-col items-center max-w-xl">
                        <h1 className="font-bold text-3xl mb-4">{t("testimonials")}</h1>
                        <div className="flex flex-row items-center gap-6 mb-8">
                            <LeftArrow className="cursor-pointer h-16 w-16 hover:text-blue-n" />
                            <p className="italic font-thin text-xl">{t("quote")}</p>
                            <RightArrow className="cursor-pointer h-16 w-16 hover:text-blue-n" />
                        </div>
                        <button className="font-bold text-white-n bg-blue-n px-8 py-3 rounded-full hover:bg-beige-n hover:text-blue-n hover:underline underline-offset-2 transition-all ease-out duration-300">{t("joinTheMovement")}</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;