import styled from "styled-components";
import { breakpoints } from "../../utils/helpers";

export const Heading1 = styled.h1`
  ${breakpoints("font-size", "rem", [
    { 0: 3.5 },
    { 375: 5.75 },
    { 768: 6.75 },
    { 1200: 7.75 },
    { 1680: 10 },
    { 1920: 12 },
  ])};
  line-height: 100%;
`;

export const Heading2 = styled.h2`
  ${breakpoints("font-size", "rem", [
    { 0: 2.25 },
    { 375: 4 },
    { 768: 5 },
    { 1200: 6 },
  ])};
  line-height: 105%;
`;

export const Heading3 = styled.h3`
  ${breakpoints("font-size", "rem", [
    { 0: 1.5 },
    { 375: 2 },
    { 768: 2.5 },
    { 1200: 3 },
  ])};
  line-height: 110%;
`;
