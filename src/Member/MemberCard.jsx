import React, { useState } from 'react';

export const MemberCard = ({ cardData }) => {
    const { buttonText, icons } = cardData;
    const [currentIconIndex, setCurrentIconIndex] = useState(0);

    const nextIcon = () => {
        setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    };

    const previousIcon = () => {
        setCurrentIconIndex((prevIndex) => (prevIndex - 1 + icons.length) % icons.length);
    };

    return (
        <div className="text-center">
            <div className="flex flex-col items-center justify-center">
                <img className="h-96" src={icons[currentIconIndex]} alt={`Icon ${currentIconIndex + 1}`} />
                <button className="hover:shadow-yellow-box bg-white border-solid border-2 border-black p-2" onClick={previousIcon}>
                    Previous
                </button>
                <button className="hover:shadow-yellow-box bg-white border-solid border-2 border-black p-2" onClick={nextIcon}>
                    Next
                </button>
                <button className="hover:shadow-yellow-box bg-white border-solid border-2 border-black p-2" onClick={nextIcon}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

