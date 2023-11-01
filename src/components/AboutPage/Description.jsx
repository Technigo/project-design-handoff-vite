import React from 'react';
import teamLogo from '../../assets/LEGZ.jpg';

function TeamDescription() {
    return (
        <div className="description-container">
            <img src={teamLogo} alt="4 Legz Logo" className="team-logo"/>
            <p>
                The Jolly team at Legz we have a highly dedicated team of louts and layabouts, 
                that are generally found outside the team base in Shirogane, mostly chatting or 
                AFK with sporadic moments of highly entertaining, sometimes borderline bizarre conversation. 
                It is a home for any sweet soul be they extrovert or shy.
            </p>
            <p>
                Many thanks to the whole Anti-Social squad, Namely Chavalier Noir, Aliassee Thassila, 
                Marcus Ax, Feira and Last but furthest from least Fyr Serra the glue that keeps things 
                together and beloved by all.
            </p>
        </div>
    );
}

export default TeamDescription;
