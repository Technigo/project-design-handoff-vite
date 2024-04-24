import styled from "styled-components";

export const NormalButton = () => {
  return <StyledButton>Get started</StyledButton>;
};

export const OrangeButton = () => {
  return <StyledButton $orange>Get started</StyledButton>;
};

export const StickyButton = () => {
  return (
    <StyledButton $sticky $orange>
      Sticky Button
    </StyledButton>
  );
};

//Styled Components

const StyledButton = styled.button`
  background-color: ${({ $orange }) => ($orange ? "#F4AB49" : "#FFFFFFD6")};
  width: ${({ $sticky }) => ($sticky ? "159px" : "88%")};
  //We will have to fix the width somehow because percentage doesn't work. I was just trying to come close but I don't know how to tell the button to fill the whole width except the margin...
  border-radius: ${({ $sticky }) => ($sticky ? "100px" : "10px")};
  color: ${({ $orange }) => ($orange ? "#FFFFFF" : "#000000")};
  box-shadow: 5px 4px 4px #0000008f;
  margin: 0 24px;
  height: 61px;
  border: 0;
  font-size: 21px;
  font-weight: bold;

  &:hover {
    background-color: ${({ $orange }) => ($orange ? "#FFFFFFD6" : "#827F7FB3")};
    color: ${({ $orange }) => ($orange ? "#F4AB49" : "#FFFFFF")};
    box-shadow: none;
  }
`;
