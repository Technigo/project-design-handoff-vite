import React from 'react';
import GridData from './GridData.json';
import "../Translation";
import { useTranslation } from "react-i18next";


const ImageContent = () => {
    const { t } = useTranslation();
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
            <div className="bg-white text-center grid grid-cols-1 md:bg-white md:grid-cols-2 lg:grid-cols-3 md:gap-1 lg:gap-2 mt-5 pt-1 lg:bg-transparent">
                <div className='px-2 md:px-20 lg:px-12 flex flex-col items-center justify-center '>
                    <h1 className='text-2xl'> {t("gridTitle1")}</h1>
                    <p>{t("gridText1")}</p>
                    <button className='mb-4 mt-4 shadow-md shadow-black hover:shadow-yellow-box g-white border-solid border-2 border-black pl-1 pr-1 lg:mb-4 mt-4'>{t("gridButton")}</button>
                </div>
                <div className=''>
                    <img className="mt-4 md:mt-0 sm:pl-0 lg:fixed-image-height first-row-image-width lg:pl-3" src={GridData[1].Image1} alt="Image 1" />
                </div>
                <div className=''>
                    <img className="mt-4 sm:pl-0 md:mt-0 lg:fixed-image-height first-row-image-width lg:pl-3" src={GridData[2].Image2} alt="Image 2" />
                </div>
                <div>
                    <img className="mt-4 md:mt-0 fixed-image-height md:pt-10 lg:pt-10" src={GridData[3].Image3} alt="Image 1" />
                </div>
                <div>
                    <img className="mt-4 lg:mt-0 md:mt-0 lg:fixed-image-height first-row-image-width lg:pl-3" src={GridData[4].Image4} alt="Image 2" />
                </div>
                <div className='px-2 mt-4 md:px-20 lg:px-16 flex flex-col items-center justify-center bg-white lg:bg-transparent'>
                    <h1 className='text-2xl'>{t("gridTitle2")}</h1>
                    <p>{t("gridText2")}</p>
                    <button className='shadow-md shadow-black hover:shadow-yellow-box g-white pl-1 pr-1 border-solid border-2 border-black mb-4 mt-4'>{t("gridButton")}</button>
                </div>
            </div>

            {/* Second row with 2 columns */}
            <div className="mt-4 md:mt-0 text-center grid grid-cols-1 bg-white md:gap-1 md:grid-cols-3 lg:mt-1 lg:bg-transparent">

                <div className="px-2 mt-4 md:px-10 lg:px-20 col-span-2 md:col-span-1 flex flex-col items-center justify-center pl-5">
                    <h1 className="text-2xl">{t("gridTitle3")}</h1>
                    <p>{t("gridText3")}</p>
                    <button className="shadow-md shadow-black hover:shadow-yellow-box bg-white border-solid border-2 border-black pl-1 pr-1 mb-4 mt-4">
                        {t("gridButton")}
                    </button>
                </div>
                <div className="mt-4 md:pl-0 md:mt-1 lg:pl-3 col-span-1 md:col-span-2">
                    <img className="long-image-height wide-image-width" src={GridData[7].Image5} alt="Image 2" />
                </div>
            </div>

            {/* Second last row with 3 columns */}
            <div className='mt-4 text-center md:mt-1 grid grid-cols-1 bg-whit md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-1 lg:mt-1 bg-white lg:bg-transparent'>
                <div className='md:pr-0 col-span-1 md:col-span-1 lg:px-0'>
                    <img className="fixed-image-height first-row-image-width lg:pr-1" src={GridData[8].Image6} alt="Image 2" />
                </div>

                <div className='col-span-1 md:col-span-1'>
                    <img className="first-row-image-width fixed-image-height lg:pl-3" src={GridData[9].Image7} alt="Image 2" />
                </div>
                <div className='px-2 flex flex-col items-center justify-center col-span-1 md:col-span-1 md:px-2 lg:px-24'>
                    <h1 className='text-2xl'>{t("gridTitle4")}</h1>
                    <p>{t("gridText4")}</p>
                    <button className='shadow-md shadow-black hover:shadow-yellow-box g-white border-solid border-2 border-black pl-1 pr-1 mb-4 mt-4'>{t("gridButton")}</button>
                </div>

            </div>

            {/* Last row with 3 columns */}
            <div className='md:bg-white lg:bg-transparent text-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-1 mt-1 md:pb-10 lg:pb-36'>
                <div className='px-2 md:px-2 lg:px-20 mt-10 flex flex-col items-center justify-center lg:p-5'>
                    <h1 className='text-2xl'>{t("gridTitle5")}</h1>
                    <p>{t("gridText5")}</p>
                    <button className="shadow-md shadow-black black-shadow hover:shadow-yellow-box bg-white border-solid border-2 border-black pl-1 pr-1 mb-4 mt-4">{t("gridButton")}</button>

                </div>
                <div className='lg:pl-3'>
                    <img className="lg:rounded-bl-3xl" src={GridData[13].Image9} alt="Image 2" />
                </div>
                <div>
                    <img className="lg:pl-3" src={GridData[14].Image10} alt="Image 2" />
                </div>


            </div>
        </div>
    );
};

export default ImageContent;
