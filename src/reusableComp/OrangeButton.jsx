import styled from "styled-components";

const OrangeButtonStyle = styled.button`
border-radius: 8px;
background: var(--popping-orange);
color: white;
display: flex;
width: 277px;
height: 48px;
padding: 10px 17px 10px 15px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
`


export const OrangeButton = ({ className, btnURL, iconURL, imgAlt, btnText }) => {
    return (
        <OrangeButtonStyle>
        <a 
        className={`button ${className}`} 
        href={btnURL}>
        <img src={iconURL} alt={imgAlt} />
        {btnText}
        </a>
        </OrangeButtonStyle>
    );
};




