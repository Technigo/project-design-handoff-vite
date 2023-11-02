import { Link } from "react-router-dom";
import { Button } from "../../../reusableComp/Button";
import { MainHeading } from "../../../reusableComp/MainHeading";
import { NormalText } from "../../../reusableComp/NormalText";
import styled from "styled-components";

const HeroSection = styled.section`
background-color: #141832;
color: white;
display: flex;
width: 390px;
height: 395px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
flex-shrink: 0
`;

//LÄGG IN STYLING FÖR BUTTON HÄR KANSKE?

const heroNormalText = "My name is Petra and I am teaching you to connect all aspects of yourself with your higher self and the Divine by using Kundalini Yoga on a daily basis. We call it Sadhana."

export const Hero = () => {
    return (
        <>
        <HeroSection>

        <MainHeading text={"Sat nam, hi!"} />
        <NormalText text={heroNormalText} />
        <Link to="/about">
        <Button
        className={"iwant-more-btn"} 
        //btnURL={article.link} 
        //imgAlt={"Web icon"} 
        //iconURL={`/icons/Doc.svg`} 
        btnText={"SAT NAM, I WANT MORE"}
         />
         </Link>
         </HeroSection>
        </>
    )
}