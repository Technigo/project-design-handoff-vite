import React from 'react';
import { ImageContent } from './ImageContent';
import { ReadMoreText } from './ReadMoreText';
import BlackBackgroundLine from '../assets/BlackLine.svg';

export const Grid = () => {
    return (
        <div className="bg-white relative grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
            <img src={BlackBackgroundLine} alt="" className="absolute top-40 left-24 z-10" />
            <ReadMoreText />
            <ImageContent />
            <ImageContent />
            <ImageContent />
            <ImageContent />
            <ReadMoreText />
            <ReadMoreText />
            <ImageContent />
            <ImageContent />
            <ImageContent />
            <ImageContent />
            <ReadMoreText />
            <ReadMoreText />
            <ImageContent />
            <ImageContent />
        </div>
    );
};
