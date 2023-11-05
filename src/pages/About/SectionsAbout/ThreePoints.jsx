import styled from "styled-components";
import { SubHeading } from "../../../reusableComp/SubHeading";

const ThreePointsSection = styled.section`
color: white;
background-color: var(--cobalt);
display: flex;
flex-direction: column;
height: 232px;
justify-content: center;
align-items: center;
`
//Define the subheadings
const Point1 = "Self Leadership"
const Point2 = "Collaboration"
const Point3 = "Do more of what you love"

export const ThreePoints = () => {
  return (
    <>
    <ThreePointsSection>
    <SubHeading text={Point1}/>
    <SubHeading text={Point2}/>
    <SubHeading text={Point3}/>
    </ThreePointsSection>
    </>
  );
};


