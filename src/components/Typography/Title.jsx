import styled from "styled-components";
import { breakpoints } from "../../utils/helpers";

export const Heading1 = styled.h1`
  ${breakpoints("font-size", "rem", [
    { 0: 4.75 },
    { 375: 5.75 },
    { 768: 6.75 },
    { 1200: 7.75 },
  ])};
  line-height: 100%;
  letter-spacing: 1px;
`;

export const Heading2 = styled.h2`
  ${breakpoints("font-size", "rem", [
    { 0: 3 },
    { 375: 4 },
    { 768: 5 },
    { 1200: 6 },
  ])};
  line-height: 105%;
  letter-spacing: 1px;
`;
