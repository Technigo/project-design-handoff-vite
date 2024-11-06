import React, { useState } from 'react';
import { LibraryCard } from "./LibraryCard";
import styled from 'styled-components';
/* import spellsData from "../src/spells.json"; */

const LibraryGrid = styled.section`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;
    gap: 16px;
    overflow-x: auto;
    padding: 16px;
    scroll-snap-type: x mandatory;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;


export const Library = ( { spellsData }) => {
    const [selectedSpell, setSelectedSpell] = useState(null);
    
    const handleCardClick = (spell) => {
        setSelectedSpell(spell);
      };

      const closePopup = () => {
        setSelectedSpell(null);
      };

    return (
        <div>
            <LibraryGrid>
            {spellsData.spells.map((spell, index) => (
                <LibraryCard
                    key={index}
                    image={spell.image}
                    title={spell.name}
                    onClick={() => handleCardClick(spell)}
                />
            ))}
            </LibraryGrid>

            {selectedSpell && (
            <PopupOverlay onClick={closePopup}>
                <PopupContent onClick={(e) => e.stopPropagation()}>
                    <h2>{selectedSpell.name}</h2>
                    <p>More information about the spell or a form can go here.</p>
                    <button onClick={closePopup}>Close</button>
                </PopupContent>
            </PopupOverlay>
            )}
        </div>

    );
};
