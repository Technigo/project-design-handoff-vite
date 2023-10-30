import React from 'react';
import { ImageContent } from './ImageContent';
import { ReadMoreText } from './ReadMoreText';

export const Grid = () => {
    return (
        <div className="bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
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
