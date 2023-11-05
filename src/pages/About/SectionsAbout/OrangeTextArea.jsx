import styled from "styled-components";
import { NormalText } from "../../../reusableComp/NormalText";

const OrangeTextAreaSection = styled.section`
color: white;
text-align: center;
background-color: var(--popping-orange);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
`

const Part1 = "Products, services and humans. I believe that we are constantly evolving and why not decide your own next step!"
const Part2 = "During the last decade I have worked in the mystical realm of spiritual creative entrepreneurship and have more than 1000 hrs of guiding humans to their intuition with meditation, private mentorships, cyclic awareness, Akashic Records and Kundalini Yoga."
const Part3 = "I have also built different feminine creative projects, Pop Up shops, webshops, websites, decorated shop windows and so much more fun. "

export const OrangeTextArea = () => {
  return (
    <>
    <OrangeTextAreaSection>
    <NormalText text={Part1}/>
    <NormalText text={Part2}/>
    <NormalText text={Part3}/>
    </OrangeTextAreaSection>
    </>
  )
}
