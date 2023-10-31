import styled from "styled-components";
import { Navbar } from "./Navbar";
import { HomeLink } from "./HomeLink";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--cobalt);
  margin: 2rem 4rem;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <HomeLink />
      <Navbar />
    </StyledHeader>
  );
};
