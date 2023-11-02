import React from 'react';
import { useNavigate } from 'react-router-dom';

export const InfoCard = ({ data }) => {
    const navigate = useNavigate();

    const navigateToAbout = () => {
        navigate('/about'); // Navigate to the "/about" route
    };

    return (
        <div className="text-center absolute p-4 grid grid-cols-1 md:pt-20 grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="text-white pl-0 p-0 pt-0 lg:mr-36">
                <div className="sm:grid grid-cols-1 md:grid grid-cols-2 lg:grid-cols-1">
                    <div>
                        <div>
                            <h1 className="pr-0 text-4xl pt-1 mt-0 md:text-6xl lg:pt-0">{data[0].title1}</h1>
                            <p className="mt-0 text-lg pt-0 md:text-lg lg:pt-10 text-white">{data[0].content1}</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="pr-0 text-4xl pt-1 mt-0 md:text-6xl lg:pt-0">{data[0].title2}</h1>
                        <p className="mt-0 text-lg pt-0 md:text-lg lg:pt-10 text-white">{data[0].content2}</p>
                    </div>
                </div>
                <h1 className="pr-0 text-4xl pt-1 mt-0 md:text-6xl lg:pt-0">{data[0].title3}</h1>
                <p className="mt-0 text-lg pt-0 md:text-lg lg:pt-10 text-white">{data[0].content3}</p>
            </div>
            <div className="flex flex-col justify-center items-center text-white">
                <div className="mt-0 pt-0 lg:border-b-4 border-white pb-10">
                    <h1 className="mt-0 text-4xl pt-0 md:text-6xl lg:pt-10 text-white">{data[1].title} <h1 className="text-yellow-color">{data[1].yellowPart}</h1></h1>
                </div>
                <button
                    className="hover:shadow-yellow-box bg-white text-black w-44 border-solid border-2 border-black p-2 mt-0 md:mb-4 mt-4 ml-20 mr-20 lg:mt-10 ml-36 mr-36"
                    onClick={navigateToAbout}
                >
                    {data[1].buttonText}
                </button>
            </div>
        </div>
    );
};
