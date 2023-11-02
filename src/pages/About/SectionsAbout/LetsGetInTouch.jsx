import styled from "styled-components";
import { SubHeading } from "../../../reusableComp/SubHeading";
import { NormalText } from "../../../reusableComp/NormalText";
import { Button } from "../../../reusableComp/Button";
import { Form } from "./Form";

const LetsGetInTouchSection = styled.section`
background-color: var(--marine);
color: white;

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


const letsGetInTouchP = "I believe that energy is everywhere and when you subscribe to my newsletter you will get my kind of energy in your mailbox. Every now and then. But a good music list is never a bad energy?!"

export const LetsGetInTouch = () => {
  return (
   <>
   <LetsGetInTouchSection>
   <LetsGetInTouchSubHeading>
    LETS GET IN TOUCH:
   </LetsGetInTouchSubHeading>
   <NormalText text={letsGetInTouchP}/>
   <Form />
   <Button
   className={"orange-btn"}
   btnText={"Good music, yes please!"} />
   </LetsGetInTouchSection>
   </>
  );
};

//byt namn på orange-btn