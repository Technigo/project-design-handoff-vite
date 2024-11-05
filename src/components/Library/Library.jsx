import { LibraryCard } from "../src/components/LibraryCard";
import spellsData from "../src/spells.json";


export const Library = () => {
    return (
        <section className="library-grid">
            {spellsData.spells.map((spell, index) => (
                <LibraryCard
                    key={index}
                    image={spell.image}
                    title={spell.name}
                    link={spell.link}
                />
            ))}
        </section>
    );
};
