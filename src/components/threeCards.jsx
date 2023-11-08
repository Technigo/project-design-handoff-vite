import React from 'react';
import threeCardsImage from '../assets/image/threeCards.png';
import '../styles/threeCards.css';

export const ThreeCards = () => { 
    return (
        <React.Fragment>
            <div className="threeCards-wrapper">
                <img className="threeCards-image" src={threeCardsImage} alt="three cards" />    
                <div className="threeCards-title">
                    <div className="threeCards-title-card-1">
                        <h1 className="threeCards-title-sub">CLASSES</h1>
                    </div>
                    <div className="threeCards-title-card-2">
                        <h1 className="threeCards-title-sub">STUDIO</h1>
                    </div>
                    <div className="threeCards-title-card-3">
                        <h1 className="threeCards-title-sub">SCHEDULE</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}