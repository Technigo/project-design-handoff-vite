import styled from "styled-components";
import { Navbar } from "./Navbar";

const StyledHeader = styled.header`
  color: var(--cobalt);
  font-family: var(--jetbrains-mono);
  font-weight: var(--fw-800);
  position: absolute;
  width: 100%;
  z-index: 1000;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  );
};
