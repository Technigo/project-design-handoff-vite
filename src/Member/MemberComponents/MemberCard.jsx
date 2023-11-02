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
                <img
                    className="h-96"
                    src={icons[currentIconIndex]}
                    alt={`Icon ${currentIconIndex + 1}`}
                    style={{
                        transition: 'opacity 0.5s',
                        opacity: 1,
                    }}
                />

                <div className=''>
                    <button
                        className="hover:shadow-yellow-box bg-white border-solid border-2 border-black p-2 lg:hidden"
                        onClick={() => {
                            previousIcon();
                            // Add a delay before fading in the new image
                            setTimeout(() => {
                                const img = document.querySelector('.h-96');
                                img.style.opacity = 0;
                                setTimeout(() => {
                                    nextIcon();
                                    img.style.opacity = 1;
                                }, 500); // Adjust this time to match your transition duration
                            }, 5); // A small delay before the transition starts
                        }}
                    >
                        Previous
                    </button>
                    <button className="hover:shadow-yellow-box bg-white border-solid border-2 border-black p-2 mr-5 ml-5">
                        {buttonText}
                    </button>
                    <button
                        className="hover:shadow-yellow-box bg-white border-solid border-2 border-black p-2 lg:hidden"
                        onClick={() => {
                            // Add a delay before fading in the new image
                            const img = document.querySelector('.h-96');
                            img.style.opacity = 0;
                            setTimeout(() => {
                                nextIcon();
                                img.style.opacity = 1;
                            }, 500);
                            // Adjust this time to match your transition duration
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
