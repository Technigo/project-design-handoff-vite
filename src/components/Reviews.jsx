import React from "react";
import "./css/reviews.css";
import { useTranslation } from 'react-i18next';

const Reviews = () => {

    const { t } = useTranslation();

    return (
        <div className="reviews">
            <h1>{t('Reviews')}</h1>
            <div className="reviews-info">
                <div className="reviews-info-child">
                    <h3>{t('I love seeing the tracker and my progress!')}<br /><br />
                        Cole <span class="italic-text">Kansas City</span></h3>
                </div>
                <div className="reviews-info-child">
                    <h3>{t('I am a sucker for free things so getting a free video every 5 days in a row I complete has been awesome! It motivates me to move my body.')} <br /><br />
                        Hannah <span class="italic-text">Pennsylvania</span></h3>
                </div>

            </div>
        </div>
    )
}

export default Reviews; 