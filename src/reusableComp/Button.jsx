import styled from "styled-components";

const ButtonStyle = styled.button`
border-radius: 8px;
background: #0021F5;
color: white;
display: flex;
width: 277px;
height: 48px;
padding: 10px 17px 10px 15px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;

&:hover {
    background-color: var(--popping-orange);
`

export const Button = ({ className, btnURL, iconURL, imgAlt, btnText }) => {
    return (
        <ButtonStyle>
        <a 
        className={`button ${className}`} 
        href={btnURL}>
        <img src={iconURL} alt={imgAlt} />
        {btnText}
        </a>
        </ButtonStyle>
    )
}