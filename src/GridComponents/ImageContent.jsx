import React from 'react';
import GridData from './GridData.json';
import "../Translation";
import { useTranslation } from "react-i18next";


const ImageContent = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en" ? "sv" : "en";
        changeLanguage(newLanguage);
    };
    return (
        <div>
            {/* Add a custom class for consistent image heights */
                <style>
                    {`
                .fixed-image-height {
                    height: 361px; 
                }
                .long-image-height {
                    height: 480px; 
                }
                .wide-image-width{
                    width: 970px;
                }
                .first-row-image-width{
                    width: 500px;
                }
                .small-image-width{
                    width: 300px
                }
                .last-image-width{
                    width: 500px
                }
                .fixed-image-height-responsive {
                    height: 200px; 
                }
                `}
                </style>
            }

            {/* First two rows with 3 columns */}
            <div className="text-center grid grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-3 gap-4 border-t-4 border-black pt-1 lg:bg-transparent">
                <div className='p-12 flex flex-col items-center justify-center '>
                    <h1 className='text-2xl'> {t("gridTitle1")}</h1>
                    <p>{t("gridText1")}</p>
                    <button className='hover:shadow-yellow-box g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{t("gridButton")}</button>
                </div>
                <div className=''>
                    <img className="sm:pl-0 lg:fixed-image-height first-row-image-width lg:pl-3" src={GridData[1].Image1} alt="Image 1" />
                </div>
                <div className=''>
                    <img className="sm:pl-0 lg:fixed-image-height first-row-image-width lg:pl-3" src={GridData[2].Image2} alt="Image 2" />
                </div>
                <div>
                    <img className="fixed-image-height" src={GridData[3].Image3} alt="Image 1" />
                </div>
                <div>
                    <img className="fixed-image-height first-row-image-width lg:pl-3" src={GridData[4].Image4} alt="Image 2" />
                </div>
                <div className='p-12 flex flex-col items-center justify-center bg-white lg:bg-transparent'>
                    <h1 className='text-2xl'>{t("gridTitle2")}</h1>
                    <p>{t("gridText2")}</p>
                    <button className='hover:shadow-yellow-box g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{t("gridButton")}</button>
                </div>
            </div>

            {/* Second row with 2 columns */}
            <div className="text-center grid grid-cols-1 bg-white md:grid-cols-3 mt-1 lg:bg-transparent">

                <div className="p-12 col-span-2 md:col-span-1 flex flex-col items-center justify-center p-5">
                    <h1 className="text-2xl">{t("gridTitle3")}</h1>
                    <p>{t("gridText3")}</p>
                    <button className="hover:shadow-yellow-box bg-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4">
                        {t("gridButton")}
                    </button>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <img className="long-image-height wide-image-width lg:pl-4" src={GridData[7].Image5} alt="Image 2" />
                </div>
            </div>

            {/* Second last row with 3 columns */}
            <div className='text-center grid grid-cols-1 bg-white md:grid-cols-3 lg:grid-cols-3 gap-4 mt-1 bg-white lg:bg-transparent'>
                <div className='col-span-1 md:col-span-1'>
                    <img className="fixed-image-height first-row-image-width lg:pr-3" src={GridData[8].Image6} alt="Image 2" />
                </div>

                <div className='col-span-1 md:col-span-1'>
                    <img className="first-row-image-width fixed-image-height lg:pl-3" src={GridData[9].Image7} alt="Image 2" />
                </div>
                <div className='flex flex-col items-center justify-center col-span-1 md:col-span-1 lg:p-12'>
                    <h1 className='text-2xl'>{t("gridTitle4")}</h1>
                    <p>{t("gridText3")}</p>
                    <button className='hover:shadow-yellow-box g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{t("gridButton")}</button>
                </div>

            </div>

            {/* Last row with 3 columns */}
            <div className='text-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-1 pb-36'>
                <div className='md:p-0 lg:p-12 mt-10 flex flex-col items-center justify-center p-5'>
                    <h1 className='text-2xl'>{t("gridTitle5")}</h1>
                    <p>{t("gridText5")}</p>
                    <button className='hover:shadow-yellow-box g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{t("gridButton")}</button>
                </div>
                <div className='lg:pl-3'>
                    <img className="" src={GridData[13].Image9} alt="Image 2" />
                </div>
                <div>
                    <img className="lg:pl-3" src={GridData[14].Image10} alt="Image 2" />
                </div>


            </div>
        </div>
    );
};

export default ImageContent;
