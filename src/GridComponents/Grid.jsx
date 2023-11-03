import React from 'react';
import ImageContent from './ImageContent';
import BlackLine from '../assets/BlackLine.svg';


export const Grid = () => {
    const backgroundStyles = {
        backgroundImage: `url(${BlackLine})`,
        backgroundPosition: '-35px 150px', // Adjust position here
        backgroundSize: '100% auto', // Adjust width and maintain aspect ratio
        backgroundRepeat: 'no-repeat', // Prevent background image from repeating
    };


    return (
        <div className="bg-white relative mt-20">
            <div className="" style={backgroundStyles}>
                <style>
                    {`
                        @media (max-width: 768px) {
                            .bg {
                                background: none;
                            }
                        }
                    `}
                </style>
                <ImageContent />

            </div>
        </div>
    );
};
