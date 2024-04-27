import contactImage from "../assets/contactImages/contactImage.png";
import { Button } from "./Buttons.jsx";
import styled from "styled-components";

export const Contact = () => {
  return (
    <>
      <ContactImage></ContactImage>
      <ContactContent>
        <ContactText>
          <h1>Not sure what to choose?</h1>
          <p>We are happy to help. Let’s chat!</p>
        </ContactText>
        <Button>Start a chat</Button>
      </ContactContent>
    </>
  );
};
const ContactContent = styled.div`
  background-color: #e6f4ff;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  margin: auto;
`;

const ContactImage = styled.div`
  background-image: url(${contactImage});
  background-size: cover;
  background-position: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 240px;
`;

const ContactText = styled.div`
  margin-left: 24px;
  margin-right: 24px;

  h1 {
    width: fit-content;
    color: var(--Powder-Black, #0b1623);
    font-family: Philosopher;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 46.8px */
    letter-spacing: 1.08px;
    margin-bottom: 24px;
  }
  p {
    color: var(--Powder-Black, #0b1623);
    font-family: Mulish;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin-bottom: 40px;
  }
`;
