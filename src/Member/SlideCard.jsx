import React from 'react';
import { Slide } from 'react-slideshow-image';
import MemberCard from './MemberCard'; // Import your MemberCard component

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
};

const Slideshow = ({ memberCardsData }) => {
    return (
        <div className="containerSlide">
            <Slide {...properties}>
                {memberCardsData.map((card, index) => (
                    <div key={index} className="each-slide">
                        <div>
                            <MemberCard cardData={card} />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slideshow;
