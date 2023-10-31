import React, { useState, useEffect } from "react";
import "./css/trainers.css";
import trainersData from "../data/trainers.json";

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        setTrainers(trainersData.trainers);
    }, []);

    return (
        <div className="trainers">
            <h1>Trainers</h1>
            <div className="trainers-images-container">
                <div className='trainers-images'>
                    {trainers.map((trainers, index) => (
                        <div key={index} className="trainers-item">
                            <img src={trainers.image} alt="pic of trainer" />
                            <h3>{trainers.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Trainers;
