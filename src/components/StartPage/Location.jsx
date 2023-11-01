import React from 'react';
import globeImage from '../../assets/Globe.png'; 

function Location() {
    return (
        <div className="location-section">
            <img src={globeImage} alt="World Map" className="location-bg"/>
            <div className="location-content">
                <h1 className="location-title">FIND US</h1>
                <p className="location-text">
                    Locate your nearest lap improvement gym and start your journey to the infinate purr today.
                </p>
                <button className="location-button">LOCATE</button>
            </div>
        </div>
    );
}

export default Location;
