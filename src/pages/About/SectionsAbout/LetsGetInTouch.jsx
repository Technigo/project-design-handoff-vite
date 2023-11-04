import styled from "styled-components";
import { NormalText } from "../../../reusableComp/NormalText";
import { Form } from "./Form";
import { OrangeButton } from "../../../reusableComp/OrangeButton";

const LetsGetInTouchSection = styled.section`
background-color: var(--marine);
color: white;
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LetsGetInTouchSubHeading = styled.div`
color: #FFF;
text-align: center;
font-family: Metal Mania;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 35px;

`;

const FormContainer = styled.div`
  background-color: var(--cobalt);
  color: #fff;
  font-family: var(--jetbrains-mono);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 600px; /* Set a maximum width for the form container */
`;


const letsGetInTouchP = "I believe that energy is everywhere and when you subscribe to my newsletter you will get my kind of energy in your mailbox. Every now and then. But a good music list is never a bad energy?!"

export const LetsGetInTouch = () => {
  return (
   <>
   <LetsGetInTouchSection>
   <LetsGetInTouchSubHeading>
    LETS GET IN TOUCH:
   </LetsGetInTouchSubHeading>
   <NormalText text={letsGetInTouchP}/>
   <FormContainer>
   <Form />
   </FormContainer>
   <OrangeButton 
   className={"orange-btn"}
   btnText={"Good music, yes please!"} />
   
   </LetsGetInTouchSection>
   </>
  );
};

