import React from 'react';
import { MemberCard } from '../MemberCard';

export const TripleSlideshow = ({ data }) => {
    const isMobile = window.innerWidth <= 768; // Assuming 768px as the threshold for mobile devices

    return (
        <div className={`grid grid-cols-1 ${isMobile ? 'md:grid-cols-1' : 'md:grid-cols-2'} lg:grid-cols-3 gap-4 justify-center items-center`}>
            {data.slice(0, isMobile ? 1 : 3).map((card, index) => (
                <MemberCard key={index} cardData={card} />
            ))}
        </div>
    );
};
