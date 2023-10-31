import React, { useState, useEffect } from "react";
import "./css/plans.css";
import plansData from "../data/plans.json";

const Plans = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        setPlans(plansData.plans);
    }, []);

    return (
        <div className="plans">
            <div className="plans-top">
                <h1>Workout Plans</h1>
                <img src="/lock-closed.png" className="small-img" alt="Lock" />
            </div>
            <div className='plans-links'>
                <a href="#" className='active'>2 days a week</a>
                <a href="#">3 days a week</a>
                <a href="#">4 days a week</a>
                <a href="#">5 days a week</a>
                <a href="#">Arms</a>
                <a href="#">Back</a>
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
