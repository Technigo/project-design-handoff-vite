import React from 'react';
import "./css/heroheader.css";

const HeroHeader = () => {

    return (
        <div className='heroheader'>
            <img src="/heropic.jpeg" alt="yoga" />
            <div className="header-info">
                <h1>At Home Fitness</h1>
                <p>Helping you move in your comfort zone</p>
            </div>
        </div>
    );
}

export default HeroHeader; 