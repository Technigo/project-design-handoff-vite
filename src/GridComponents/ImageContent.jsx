// ImageContent.jsx
import React from 'react';
import { useContentStore } from './ContentStore';

export const ImageContent = () => {
    const contentStore = useContentStore();
    const { imageContent } = contentStore;

    return (
        <div className="text-center">
            <img src={imageContent.imageUrl} alt="Image Description" />
        </div>
    );
};
