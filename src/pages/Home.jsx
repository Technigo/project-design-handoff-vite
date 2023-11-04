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

const Home = () => {
    const classes = [
        "CORE FLEX",
        "PRE NATAL",
        "POST NATAL",
        "FOUNDATION",
        "BREATH WORK",
        "LOW, MEDIUM AND HIGH INTENSITY",
        "CLASSES",
    ];

    const benefits = [
        "CORE STRENGTH",
        "INCREASED ENERGY",
        "IMPROVED FLEXIBILITY AND MOBILITY",
        "IMPROVED BALANCE",
        "STRONG POSTURE",
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
                        <h1 className="font-bold text-white-n text-2xl w-32 mb-4">Master the Pilates fundamentals</h1>
                        <h2 className="semi-bold text-white-n text-lg mb-6">Sculpt, sweat and flow it out on the mat with the help of 100+ online classes. Available whenever you want.</h2>
                        <button className="font-bold text-white-n bg-blue-n px-8 py-3 rounded-full hover:bg-beige-n hover:text-blue-n hover:underline underline-offset-2 transition-all ease-out duration-300">JOIN THE MOVEMENT</button>
                    </div>
                </div>
            </section>
            <section className="py-4 border-y-4 border-green-n overflow-hidden">
                <p className={`text-md font-bold whitespace-nowrap ${styles.scroll}`}>{`CLASSES: ${[...classes, ...classes].join("  •  ")}`}</p>
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
                            <p className="text-lg -ms-12 mb-4 text-xl">Different levels tailored to your needs</p>
                            <p className="text-lg mb-4 text-xl">Low impact sessions ranging from 15-45 minutes</p>
                            <p className="text-lg ps-12 text-xl">Certified instructors teaching you the fundamentals of Pilates</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <h1 className="text-3xl">
                        Unlock <b>100+ classes</b> and start <b>moving on the move</b>
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
                <p className={`text-md font-bold whitespace-nowrap ${styles.scroll}`}>{`BENEFITS: ${[...benefits, ...benefits].join("  •  ")}`}</p>
            </section>
            <section className="px-8 py-12 flex items-center flex-col md:flex-row gap-8">
                <img className="max-w-[317px] md:max-w-[337px] lg:max-w-[550px] mb-8" src={Yoga} alt="Doing yoga" />
                <div className="flex items-center">
                    <div className="flex flex-col items-center max-w-xl">
                        <h1 className="font-bold text-3xl mb-4">Testimonials</h1>
                        <div className="flex flex-row items-center gap-6 mb-8">
                            <LeftArrow className="cursor-pointer h-16 w-16 hover:text-blue-n" />
                            <p className="italic font-thin text-xl">
                                I love the movements and seeing my body transform before my eyes! I didn’t realise how much my posture could improve until I tried the “Posture class”.
                            </p>
                            <RightArrow className="cursor-pointer h-16 w-16 hover:text-blue-n" />
                        </div>
                        <button className="font-bold text-white-n bg-blue-n px-8 py-3 rounded-full hover:bg-beige-n hover:text-blue-n hover:underline underline-offset-2 transition-all ease-out duration-300">JOIN THE MOVEMENT</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;