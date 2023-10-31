// MemberCard.js
import React from 'react';

const MemberCard = ({ cardData }) => {
    const { title, subtitle, content1, content2, content3, content4, content5, buttonText } = cardData;

    return (
        <div className="text-center w-auto">
            <h2 className="bg-white  bg-opacity-50 text-3xl lg:text-6xl rounded-t-lg">{title}</h2>
            <p className="h-64 w-auto bg-white rounded-b-lg">
                {subtitle && <p>{subtitle}</p>}
                <p>{content1}</p>
                <p>{content2}</p>
                {content3 && <p>{content3}</p>}
                {content4 && <p>{content4}</p>}
                {content5 && <p>{content5}</p>}
            </p>
            <button className="bg-white border-solid border-2 border-black p-2">{buttonText}</button>
        </div>
    );
};

export default MemberCard;
