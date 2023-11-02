import React from 'react';
import { MemberCard } from './MemberCard';

export const TripleSlideshow = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
            {data.map((card, index) => (
                <MemberCard key={index} cardData={card} />
            ))}

        </div>
    );
};
