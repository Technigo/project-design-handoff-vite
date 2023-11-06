import React, { useState } from 'react';
import "../Translation";
import { useTranslation } from "react-i18next";


export const MemberCard = ({ cardData }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en" ? "sv" : "en";
        changeLanguage(newLanguage);
    };

    //Slide show
    const { buttonText, icons } = cardData;
    const [currentIconIndex, setCurrentIconIndex] = useState(0);

    const nextIcon = () => {
        setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    };

    const previousIcon = () => {
        setCurrentIconIndex((prevIndex) => (prevIndex - 1 + icons.length) % icons.length);
    };

    return (
        //These pictures are placeholders
        <div className="text-center">
            <div className="flex flex-col items-center justify-center">

                <img
                    className="h-96 rounded-2xl"
                    src={icons[currentIconIndex]}
                    alt={`Icon ${currentIconIndex + 1}`}
                    style={{
                        transition: 'opacity 0.5s',
                        opacity: 1,
                    }}
                />

                <div className=''>
                    <button
                        className="hover:shadow-yellow-box bg-white border-solid border-2 border-black p-2 mr-5 ml-5 relative top-[-200px] lg:hidden"
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
                        <img src="https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Back.svg?v=1699111562601" alt="" />
                    </button>
                    <button className="hover:shadow-yellow-box bg-white border-solid border-2 border-black p-1 pl-11 pr-11 mr-5 ml-5 relative top-[-15px]">
                        {t("gridButton")}
                    </button>


                    <button
                        className="hover:shadow-yellow-box bg-white border-solid border-2 border-black p-2 mr-5 ml-5 relative top-[-200px] lg:hidden"
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
                        <img
                            src="https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Back.svg?v=1699111562601"
                            alt=""
                            style={{ transform: 'scaleX(-1)' }}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
