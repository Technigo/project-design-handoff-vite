import React, { useState, useEffect } from "react";
import "./css/trainers.css";
import trainersData from "../data/trainers.json";
import { useTranslation } from 'react-i18next';

const Trainers = () => {

    const { t } = useTranslation();

    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        setTrainers(trainersData.trainers);
    }, []);

    return (
        <div className="trainers">
            <h1>{t('Trainers')}</h1>
            <div className="trainers-images-container">
                <div className='trainers-images'>
                    {trainers.map((trainer, index) => (
                        <div key={index} className="trainers-item">
                            <div
                                className="heart-icon"
                                style={{ backgroundImage: `url(${trainer.heartIcon})` }}
                            ></div>
                            <a href="#"><img src={trainer.image} alt="pic of trainer" /></a>
                            <h3>{trainer.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Trainers;
