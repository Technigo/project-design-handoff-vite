
import styled from "styled-components";
import { SubHeading } from "../../../reusableComp/SubHeading";
import { NormalText } from "../../../reusableComp/NormalText";



const letsGetInTouchP = "I believe that energy is everywhere and when you subscribe to my newsletter you will get my kind of energy in your mailbox. Every now and then. But a good music list is never a bad energy?!"

export const Form = () => {
  return (
   <>
   <SubHeading text={"LETS GET IN TOUCH:"}/>
   <NormalText text={letsGetInTouchP}/>
   </>
  );
};

//Form kanske ska få sin egen komponent och sedan en egen till let's get in touch