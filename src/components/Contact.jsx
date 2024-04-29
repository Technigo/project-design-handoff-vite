import contactImage from "../assets/contactImages/contactImage.png";
import { Button } from "./Buttons.jsx";
import styled from "styled-components";

export const Contact = () => {
  return (
    <>
      <ContactWrapper>
        <ContactImage></ContactImage>
        <ContactContent>
          <ContactText>
            <h1>Not sure what to choose?</h1>
            <p>We are happy to help. Let’s chat!</p>
          </ContactText>
          <Button>Start a chat</Button>
        </ContactContent>
      </ContactWrapper>
    </>
  );
};

const ContactWrapper = styled.section`
  background-color: #e6f4ff;
  display: grid;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 24px;
`;

const ContactImage = styled.div`
  background-image: url(${contactImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 240px;

  @media (min-width: 600px) {
    order: 0;
  }
`;

const ContactText = styled.div`
  margin-left: 24px;
  margin-right: 24px;

  h1 {
    width: 100 %
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
    width: 100%;
  }
`;
