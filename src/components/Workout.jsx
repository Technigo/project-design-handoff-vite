import React, { useState, useEffect } from 'react';
import './css/workout.css';
import workoutsData from '../data/workouts.json';

const Workout = () => {
    const [workouts, setWorkouts] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 834); // Function to hide workout-minutes based on mobile and tablet

    useEffect(() => {
        // Set the workouts data from the imported JSON
        setWorkouts(workoutsData.workouts);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 834);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="workout">
            <h1>Workout</h1>
            <div className="workout-links">
                <a href="#" className="active">
                    Cardio
                </a>
                <a href="#">Hiit</a>
                <a href="#">Yoga</a>
                <a href="#">Glutes</a>
                <a href="#">Back</a>
                <a href="#">Arms</a>
                <a href="#">Zumba</a>
                <a href="#">Stretch</a>
            </div>
            <div className="workout-images-container">
                <div className="workout-images">
                    {workouts.map((workout, index) => (
                        <div key={index} className="workout-item">
                            <div
                                className="heart-icon"
                                style={{ backgroundImage: `url(${workout.heartIcon})` }}
                            ></div>
                            <a href="#">
                                <img src={workout.image} alt="workout" />
                            </a>
                            <h3>{workout.name}</h3>
                            {!isMobile && <p>{workout.minutes}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workout;
