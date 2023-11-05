import styles from "./Banner.module.css";

// Functional component named "Banner" that takes two props: "items" and "label".
const Banner = ({ items, label }) => {
    return (
        // This JSX represents a section element with specific classes and styles.
        <section className="py-4 border-y-4 border-green-n overflow-hidden">
            {/* 
                Inside the section, there's a paragraph element with dynamic content.
                The content is a string that combines the "label" prop and the "items" prop.
                The items are repeated twice and separated by "  •  ".
                The "styles.scroll" class is applied for additional styling.
            */}
            <p className={`text-md font-bold whitespace-nowrap ${styles.scroll}`}>
                {`${label}: ${[...items, ...items].join("  •  ")}`}
            </p>
        </section>
    );
}

export default Banner;
