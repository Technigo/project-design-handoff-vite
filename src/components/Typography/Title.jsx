import styled from "styled-components";
import { breakpoints } from "../../utils/helpers";

// Define the Title styled component directly, without an arrow function
export const Title = styled.h1`
  ${breakpoints("font-size", "rem", [
    { 0: 4.75 },
    { 375: 5.75 },
    { 768: 6.75 },
    { 1200: 7.75 },
  ])};
  line-height: 100%;
  letter-spacing: 1px;
`;

// Define H2Link as a standard styled component
export const H2Link = styled.h2`
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 105%;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
