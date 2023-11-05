import { Link } from "react-router-dom";
import { Button } from "../../../reusableComp/Button";
import { MainHeading } from "../../../reusableComp/MainHeading";
import { NormalText } from "../../../reusableComp/NormalText";
import styled from "styled-components";
import backgroundImage from "../../../../public/images/womanwinking.webp";

const HeroSection = styled.section`
background-image: url(${backgroundImage});
background-size: cover; 
background-position: center; 
background-repeat: no-repeat; 
color: white;
display: flex;
height: 100vh;
flex-direction: column;
justify-content: flex-end;
align-items: center;
padding-bottom: 15px; 
gap: 16px;
flex-shrink: 0
`;

const heroNormalText = "My name is Petra and I am teaching you to connect all aspects of yourself with your higher self and the Divine by using Kundalini Yoga on a daily basis. We call it Sadhana."

export const Hero = () => {
    return (
        <>
        <HeroSection>
        <MainHeading text={"Sat nam, hi!"} />
        <NormalText text={heroNormalText} />
        <Link to="/about"> {/* When you click on the btn you will go to the about page */}
        <Button
        className={"iwant-more-btn"} 
        btnText={"SAT NAM, I WANT MORE"}
         />
         </Link>
         </HeroSection>
        </>
    );
};

export default Hero;