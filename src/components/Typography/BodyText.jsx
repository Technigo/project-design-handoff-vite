import styled from "styled-components";
import { breakpoints } from "../../utils/helpers";

export const BodyLarge = styled.p`
  ${breakpoints("font-size", "rem", [
    { 0: 1 },
    { 375: 1.25 },
    { 768: 1.5 },
    { 1200: 1.75 },
  ])};
  font-weight: 500;
  line-height: 115%;
  letter-spacing: 0.015rem;
`;

export const BodyXSmall = styled.p`
  ${breakpoints("font-size", "rem", [
    { 0: 1 },
    { 375: 1.25 },
    { 768: 1.5 },
    { 1200: 1.75 },
  ])};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  line-height: 115%;
  letter-spacing: 0.0125rem;
`;

export const FinePrint = styled.p`
  ${breakpoints("font-size", "rem", [{ 0: 1 }, { 375: 1.125 }, { 768: 1.25 }])};
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.01125rem;
`;
