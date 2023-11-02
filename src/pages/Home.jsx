import HeaderPhoto from "../assets/header-photo.png";
import iPhone from "../assets/iphone-16.png";
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
            <section className="bg-cover px-4 py-16" style={{ backgroundImage: `url(${HeaderPhoto})` }}>
                <h1 className="font-bold text-white-n text-2xl w-32 mb-4">Master the Pilates fundamentals</h1>
                <h2 className="semi-bold text-white-n text-lg mb-4">Sculpt, sweat and flow it out on the mat with the help of 100+ online classes. Available whenever you want.</h2>
                <button className="text-white-n bg-blue-n px-8 py-3 rounded-full hover:bg-beige-n hover:text-blue-n hover:underline" >JOIN THE MOVEMENT</button>
            </section>
            <section className="py-4 border-y-4 border-green-n overflow-hidden">
                <p className={`text-md font-bold whitespace-nowrap ${styles.scroll}`}>{`CLASSES: ${[...classes, ...classes].join("  •  ")}`}</p>
            </section>
            <section className="flex">
                <img
                    className="w-1/3 object-contain"
                    src={iPhone}
                    alt="Photo of an iPhone"
                />
                <div className="flex items-center">
                    <div>
                        <p className="text-lg -ms-16 mb-4">Different levels tailored to your needs</p>
                        <p className="text-lg mb-4">Low impact sessions ranging from 15-45 minutes</p>
                        <p className="text-lg ps-12">Certified instructors teaching you the fundamentals of Pilates</p>
                    </div>
                </div>
            </section>
            <section className="py-4 border-y-4 border-green-n overflow-hidden">
                <p className={`text-md font-bold whitespace-nowrap ${styles.scroll}`}>{`BENEFITS: ${[...benefits, ...benefits].join("  •  ")}`}</p>
            </section>
        </>
    )
}

export default Home;