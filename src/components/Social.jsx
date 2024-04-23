import styled from "styled-components";
import { Instagram } from "./Instagram";
import { Facebook } from "./Facebook";
import { Linkedin } from "./Linkedin";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;

  @media all and (min-width: 1024px) {
    grid-area: ${({ $placement }) => $placement === "footer" && "so"};
  }
`;

export const Social = ({ $placement }) => {
  return (
    <StyledDiv $placement={$placement}>
      <Link to="#">
        <Facebook />
      </Link>
      <Link to="#">
        <Instagram />
      </Link>
      <Link to="#">
        <Linkedin />
      </Link>
    </StyledDiv>
  );
};
