import { Button } from "../../../reusableComp/Button";
import { MainHeading } from "../../../reusableComp/MainHeading";
import { NormalText } from "../../../reusableComp/NormalText";
import styled from "styled-components";

const HeroSection = styled.section`
background-color: #141832;
color: white;
`
//LÄGG IN STYLING FÖR BUTTON HÄR KANSKE?

const heroNormalText = "My name is Petra and I am teaching you to connect all aspects of yourself with your higher self and the Divine by using Kundalini Yoga on a daily basis. We call it Sadhana."

export const Hero = () => {
    return (
        <>
        <HeroSection>
        <MainHeading text={"Sat nam, hi!"} />
        <NormalText text={heroNormalText} />
        <Button
        className={"iwant-more-btn"} 
        //btnURL={article.link} 
        //imgAlt={"Web icon"} 
        //iconURL={`/icons/Doc.svg`} 
        btnText={"SAT NAM, I WANT MORE"}
         />
         </HeroSection>
        </>
    )
}