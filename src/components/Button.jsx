import styled from "styled-components";
import PropTypes from "prop-types";
import { Heading2 } from "./Typography/Title";
import { breakpoints } from "../utils/helpers";
import Arrow from "../assets/icons/arrow.svg?react";

const StyledButtonLink = styled.a`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    ${breakpoints("gap", "", [
      { 0: theme.spacing.large },
      { 375: theme.spacing.xlarge },
      { 1200: theme.spacing.xxlarge },
    ])};
    color: currentColor;
    text-decoration: underline;

    svg {
      height: auto;
      ${breakpoints("width", "rem", [
        { 0: "1.75" },
        { 375: "2.375" },
        { 1200: "3" },
      ])};
  `}
`;

export const Button = ({ url }) => {
  return (
    <>
      <StyledButtonLink href={url}>
        <Heading2>Start today</Heading2>
        <Arrow />
      </StyledButtonLink>
    </>
  );
};

Button.propTypes = {
  url: PropTypes.string.isRequired,
};
