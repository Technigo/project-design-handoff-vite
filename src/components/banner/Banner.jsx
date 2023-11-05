import styles from "./Banner.module.css";

const Banner = ({ items, label }) => {
    return (
        <section className="py-4 border-y-4 border-green-n overflow-hidden">
            <p className={`text-md font-bold whitespace-nowrap ${styles.scroll}`}>{`${label}: ${[...items, ...items].join("  •  ")}`}</p>
        </section>
    );
}

export default Banner;