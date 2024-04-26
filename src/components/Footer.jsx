import styled from "styled-components";
export const Footer = () => {
  return (
    <FooterContent>
      <p>Learn, Laugh, and
         Connect on the Slopes!</p>
    </FooterContent>
  );
};

const FooterContent = styled.div`
background-color: #234059;
height: 600px;
color: #FFC8DD;
    font-family: Philosopher;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 1.08px;
    padding-left: 100px;
    margin-bottom: 24px;

`;
