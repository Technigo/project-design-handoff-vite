import React, { useState, useEffect } from 'react';
import { MemberCard } from '../MemberCard';



//Show one card on mobile and ipad, 3
export const TripleSlideshow = ({ data }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`grid grid-cols-1 ${isMobile ? 'md:grid-cols-1' : 'md:grid-cols-2'} lg:grid-cols-3 gap-4 justify-center items-center`}>
            {data.slice(0, isMobile ? 1 : 3).map((card, index) => (
                <MemberCard key={index} cardData={card} />
            ))}
        </div>
    );
};
