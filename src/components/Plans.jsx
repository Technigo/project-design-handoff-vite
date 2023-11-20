import React, { useState, useEffect } from "react";
import "./css/plans.css";
import plansData from "../data/plans.json";
import { useTranslation } from 'react-i18next';

const Plans = () => {

    const { t } = useTranslation();

    const [plans, setPlans] = useState([]);

    useEffect(() => {
        setPlans(plansData.plans);
    }, []);

    return (
        <div className="plans">
            <div className="plans-top">
                <h1>{t('Workout Plans')}</h1>
                <img src="/lock-closed.png" className="small-img" alt="Lock" />
            </div>
            <div className='plans-links'>
                <a href="#" className='active'>2 {t('days a week')}</a>
                <a href="#">3 {t('days a week')}</a>
                <a href="#">4 {t('days a week')}</a>
                <a href="#">5 {t('days a week')}</a>
                <a href="#">{t('Arms')}</a>
                <a href="#">{t('Back')}</a>
            </div>
            <div className="plans-images-container">
                <div className='plans-images'>
                    {plans.map((plan, index) => (
                        <div key={index} className="plans-item">
                            <div
                                className="heart-icon"
                                style={{ backgroundImage: `url(${plan.heartIcon})` }}
                            ></div>
                            <a href="#"><img src={plan.image} alt="workout plans" /></a>
                            <h3>{plan.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Plans;
