import styled from "styled-components"
// import data from "../../cards.json"


export const Card = ({ cardImage, cardText }) => {
    return (
        <div className="card">
            <img src={cardImage} alt="card-image.jpg" />
            <p>{cardText}</p>
        </div>
    );
};
