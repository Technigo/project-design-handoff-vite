import React from 'react';
import GridData from './GridData.json';


const ImageContent = () => {
    return (
        <div className="text-center m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t-4 border-black">
            <div className='mt-10 mt-10 flex flex-col items-center justify-center'>
                <h1 className='text-2xl'>{GridData[0].title}</h1>
                <p>{GridData[0].content}</p>
                <button className='g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{GridData[0].button}</button>
            </div>
            <div className='mt-10'>
                <img src={GridData[1].Image1} alt="Image 1" />
            </div>
            <div className='mt-10'>
                <img src={GridData[2].Image2} alt="Image 2" />
            </div>
            <div>
                <img src={GridData[3].Image3} alt="Image 1" />
            </div>
            <div>
                <img src={GridData[4].Image4} alt="Image 2" />
            </div>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <h1 className='text-2xl'>{GridData[5].title1}</h1>
                <p>{GridData[5].content1}</p>
                <button className='g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{GridData[5].button}</button>
            </div>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <h1>{GridData[6].title2}</h1>
                <p>{GridData[6].content2}</p>
                <button className='g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{GridData[6].button}</button>
            </div>
            <div>
                <img src={GridData[7].Image5} alt="Image 2" />
            </div>
            <div>
                <img src={GridData[8].Image6} alt="Image 2" />
            </div>
            <div>
                <img src={GridData[9].Image7} alt="Image 2" />
            </div>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <h1 className='text-2xl'>{GridData[10].title3}</h1>
                <p>{GridData[10].content3}</p>
                <button className='g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{GridData[10].button}</button>
            </div>
            <div>
                <img src={GridData[11].Image8} alt="Image 2" />
            </div>
            <div className=''>
                <h1 className='text-2xl'>{GridData[12].title4}</h1>
                <p>{GridData[12].content4}</p>
                <button className='g-white w-44 border-solid border-2 border-black p-2 mb-4 mt-4'>{GridData[12].button}</button>
            </div>
            <div>
                <img src={GridData[13].Image9} alt="Image 2" />
            </div>
            <div>
                <img src={GridData[14].Image10} alt="Image 2" />
            </div>
            {/* Continue displaying additional content as needed */}
        </div>
    );
};

export default ImageContent;
