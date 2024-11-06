import styled from "styled-components";
import { Heading2 } from "./Typography/Title";

const StyledButtonLink = styled.a`
  color: currentColor;
  text-decoration: underline;
`;

export const Button = () => {
  return (
    <>
      <StyledButtonLink href="#">
        <Heading2>Start today</Heading2>
      </StyledButtonLink>
    </>
  );
};
