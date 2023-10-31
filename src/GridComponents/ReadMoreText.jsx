// TextContent.jsx
import React from 'react';
import { useContentStore } from './ContentStore';

export const ReadMoreText = () => {
    const contentStore = useContentStore();
    const { textContent } = contentStore;

    return (
        <div className="text-center h-full flex flex-col justify-center items-center">
            {textContent.map((item, index) => (
                <div key={index}>
                    <h2 className="text-lg m-4">{item.title}</h2>
                    <p className="text-sm m-4">{item.description}</p>
                    <button className="border-solid border-2 border-black p-2">Read more</button>
                </div>
            ))}
        </div>
    );
};
