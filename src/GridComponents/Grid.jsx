import React from 'react';
import ImageContent from './ImageContent';
import BlackLine from '../assets/BlackLine.svg';


export const Grid = () => {
    const backgroundStyles = {
        backgroundImage: `url(${BlackLine})`,
        backgroundPosition: '-75px 195px', // Adjust position here
        backgroundSize: '108% auto', // Adjust width and maintain aspect ratio
        backgroundRepeat: 'no-repeat', // Prevent background image from repeating
    };


    return (
        <div className="relative mt-20 bg-white lg:bg-transparent">
            <div className="md:w-screen lg:w-11/12 h-1 bg-black"></div>
            <div className="" style={backgroundStyles}>

                <ImageContent />

            </div>
        </div>
    );
};
