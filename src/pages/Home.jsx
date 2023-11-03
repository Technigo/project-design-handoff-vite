import HeaderPhoto from "../assets/header-photo.png";
import iPhone from "../assets/iphone-16.png";
import Yoga from "../assets/yoga.png";
import Appstore from "../assets/appstore.svg?react";
import GooglePlay from "../assets/googleplay.svg?react";
import RightArrow from "../assets/right-arrow.svg?react";
import LeftArrow from "../assets/left-arrow.svg?react";
import styles from "./Home.module.css";
import { App } from "../App";


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
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4">
                        <h1 className="font-bold text-white-n text-2xl w-32 mb-4">Master the Pilates fundamentals</h1>
                        <h2 className="semi-bold text-white-n text-lg mb-4">Sculpt, sweat and flow it out on the mat with the help of 100+ online classes. Available whenever you want.</h2>
                        <button className="font-bold text-white-n bg-blue-n px-8 py-3 rounded-full hover:bg-beige-n hover:text-blue-n hover:underline underline-offset-2">JOIN THE MOVEMENT</button>
                    </div>
                </div>
            </section>
            <section className="py-4 border-y-4 border-green-n overflow-hidden">
                <p className={`text-md font-bold whitespace-nowrap ${styles.scroll}`}>{`CLASSES: ${[...classes, ...classes].join("  •  ")}`}</p>
            </section>
            <section className="flex flex-col md:flex-row p-4">
                <div className="flex mb-4 md:mb-0">
                    <img
                        className="w-1/3 object-contain"
                        src={iPhone}
                        alt="Photo of an iPhone"
                    />
                    <div className="flex items-center">
                        <div>
                            <p className="text-lg -ms-16 mb-4">Different levels tailored to your needs</p>
                            <p className="text-lg -ms-8 mb-4">Low impact sessions ranging from 15-45 minutes</p>
                            <p className="text-lg ps-4">Certified instructors teaching you the fundamentals of Pilates</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <h1 className="text-3xl">
                        Unlock <b>100+ classes</b> and start <b>moving on the move</b>
                    </h1>
                    <div className="flex flex-col justify-center">
                        <Appstore className="mb-4 cursor-pointer hover:bg-beige-n hover:text-black" />
                        <GooglePlay className="cursor-pointer hover:bg-beige-n hover:text-black" />
                    </div>
                </div>
            </section>
            <section className="py-4 border-y-4 border-green-n overflow-hidden">
                <p className={`text-md font-bold whitespace-nowrap ${styles.scroll}`}>{`BENEFITS: ${[...benefits, ...benefits].join("  •  ")}`}</p>
            </section>
            <section className="px-4 py-12 flex items-center flex-col">
                <img className="max-w-[317px] mb-8" src={Yoga} alt="Doing yoga" />
                <h1 className="font-bold text-3xl mb-4">Testimonials</h1>
                <div className="flex flex-row items-center gap-6 mb-4">
                    <LeftArrow className="cursor-pointer h-16 w-16 hover:text-blue-n" />
                    <p className="italic font-thin">
                        I love the movements and seeing my body transform before my eyes! I didn’t realise how much my posture could improve until I tried the “Posture class”.
                    </p>
                    <RightArrow className="cursor-pointer h-16 w-16 hover:text-blue-n" />
                </div>
                <button className="font-bold text-white-n bg-blue-n px-8 py-3 rounded-full hover:bg-beige-n hover:text-blue-n hover:underline underline-offset-2">JOIN THE MOVEMENT</button>
            </section>
        </>
    )
}

export default Home;