import React from 'react';
import GridData from './GridData.json';

const ImageContent = () => {
    return (
        <div>
            {/* Add a custom class for consistent image heights */
                <style>
                    {`
                .fixed-image-height {
                    height: 371px; /* Adjust the height as needed */
                }
                .long-image-height {
                    height: 500px; /* Adjust the height as needed */
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
                    height: 300px; /* Adjust the height as needed */
                }
                `}
                </style>
            }

            {/* First two rows with 3 columns */}
            <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t-4 border-black pt-1">
                <div className='p-5 flex flex-col items-center justify-center'>
                    <h1 className='text-2xl'>{GridData[0].title}</h1>
                    <p>{GridData[0].content}</p>
                    <button className='hover:shadow-yellow-box g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{GridData[0].button}</button>
                </div>
                <div className=''>
                    <img className="fixed-image-height first-row-image-width pl-3" src={GridData[1].Image1} alt="Image 1" />
                </div>
                <div className=''>
                    <img className="fixed-image-height first-row-image-width" src={GridData[2].Image2} alt="Image 2" />
                </div>
                <div>
                    <img className="fixed-image-height" src={GridData[3].Image3} alt="Image 1" />
                </div>
                <div>
                    <img className="fixed-image-height first-row-image-width pl-3" src={GridData[4].Image4} alt="Image 2" />
                </div>
                <div className='p-5 flex flex-col items-center justify-center'>
                    <h1 className='text-2xl'>{GridData[5].title1}</h1>
                    <p>{GridData[5].content1}</p>
                    <button className='hover:shadow-yellow-box g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{GridData[5].button}</button>
                </div>
            </div>

            {/* Second row with 2 columns */}
            <div className="text-center grid grid-cols-1 md:grid-cols-3 mt-1">

                <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center p-5">
                    <h1 className="text-2xl">{GridData[6].title2}</h1>
                    <p>{GridData[6].content2}</p>
                    <button className="hover:shadow-yellow-box bg-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4">
                        {GridData[6].button}
                    </button>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <img className="long-image-height wide-image-width pl-4" src={GridData[7].Image5} alt="Image 2" />
                </div>
            </div>

            {/* Second last row with 5 columns */}
            <div className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-4 mt-1'>
                <div className='col-span-1 md:col-span-3'>
                    <img className="fixed-image-height first-row-image-width pr-8" src={GridData[8].Image6} alt="Image 2" />
                </div>

                <div className='col-span-1 md:col-span-3'>
                    <img className="first-row-image-width fixed-image-height pl-3" src={GridData[9].Image7} alt="Image 2" />
                </div>
                <div className='flex flex-col items-center justify-center col-span-1 md:col-span-2'>
                    <h1 className='text-2xl'>{GridData[10].title3}</h1>
                    <p>{GridData[10].content3}</p>
                    <button className='hover:shadow-yellow-box g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{GridData[10].button}</button>
                </div>
                <div>
                    <img className="fixed-image-height" src={GridData[11].Image8} alt="Image 2" />
                </div>
            </div>

            {/* Last row with 3 columns */}
            <div className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-1 pb-36'>
                <div className='mt-10 flex flex-col items-center justify-center p-5'>
                    <h1 className='text-2xl'>{GridData[12].title4}</h1>
                    <p>{GridData[12].content4}</p>
                    <button className='hover:shadow-yellow-box g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{GridData[12].button}</button>
                </div>
                <div >
                    <img className="fixed-image-height last-image-width pl-3" src={GridData[13].Image9} alt="Image 2" />
                </div>
                <div>
                    <img className="fixed-image-height last-image-width" src={GridData[14].Image10} alt="Image 2" />
                </div>
            </div>
        </div>
    );
};

export default ImageContent;
