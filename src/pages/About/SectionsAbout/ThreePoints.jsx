import { NormalText } from "../../../reusableComp/NormalText"
import styled from "styled-components";

const ThreePointsSection = styled.section`
color: white;
background-color: var(--cobalt);
display: flex;
flex-direction: column;
width: 390px;
height: 232px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 10px;
`


const Point1 = "Self Leadership"
const Point2 = "Collaboration"
const Point3 = "Do more of what you love"

export const ThreePoints = () => {
  return (
    <>
    <ThreePointsSection>
    <NormalText text={Point1}/>
    <NormalText text={Point2}/>
    <NormalText text={Point3}/>
    </ThreePointsSection>
    </>
    
  )
}


//ev ändra dessa till ul?