import React from 'react';
import "./css/workout.css";

const Workout = () => {

    return (
        <div className="workout">
            <h1>Workout</h1>
            <div className='workout-links'>
                <a href="#">Cardio</a>
                <a href="#">Hiit</a>
                <a href="#">Yoga</a>
                <a href="#">Glutes</a>
                <a href="#">Back</a>
                <a href="#">Arms</a>
                <a href="#">Zumba</a>
                <a href="#">Stretch</a>
            </div>
            <div className='workout-images'>
                <img src="/hiit.png" alt="HIIT" />
                <img src="/lowimpact.png" alt="Low Impact" />
                <img src="/band.png" alt="Band Workout" />
                <img src="/glute.png" alt="Glute Workout" />
            </div>
        </div>
    );
}

export default Workout; 