import React from 'react';

function TeamMemberCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} className="card-image"/>
            <h2 className="card-name">{props.name}</h2>
            <p className="card-description">{props.description}</p>
        </div>
    );
}

export default TeamMemberCard;

