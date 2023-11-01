import React, { useState } from 'react';
import './PopUp.css';

function PopUp({ onClose }) {
    const [stage, setStage] = useState(0);

    const handleNext = () => {
        if (stage < 3) {
            setStage(prevStage => prevStage + 1);
        } else {
            onClose(); // Close the popup when the last stage is done
        }
    };

    const renderStage = () => {
        switch (stage) {
            case 0:
                return (
                    <>
                        <p>Please Provide your name</p>
                        <input placeholder="Name Please" />
                        <button onClick={handleNext}>NEXT</button>
                    </>
                );
            case 1:
                return (
                    <>
                        <p>We want your email.</p>
                        <input placeholder="Gather Emails? Prawns!" />
                        <p>We will exchange this info with spammers for Prawns!</p>
                        <button onClick={handleNext}>PRAWNS!</button>
                    </>
                );
            case 2:
                return (
                    <>
                        <textarea placeholder="Write your Meowssage"></textarea>
                        <p>If we could read, we might just read this between naps and meal times</p>
                        <button onClick={handleNext}>PRAWNS!</button>
                    </>
                );
            case 3:
                return (
                    <>
                        <p>So long and thanks for all the fish.</p>
                        <button onClick={handleNext}>THANK YOU</button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="popup-container">
            {renderStage()}
        </div>
    );
}

export default PopUp;
