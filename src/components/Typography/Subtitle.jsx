import styled from "styled-components";
import { breakpoints } from "../../utils/helpers";

export const SubH1 = styled.p`
  ${breakpoints("font-size", "rem", [
    { 0: 1.625 },
    { 375: 2.5 },
    { 768: 2.75 },
    { 1200: 3 },
  ])};
  font-weight: 400;
  line-height: 110%; /* 44px */
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
`;
