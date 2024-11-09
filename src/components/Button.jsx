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
      { 375: theme.spacing.xxlarge },
      { 1200: theme.spacing.xxxlarge },
    ])};
    color: currentColor;
    text-decoration: underline;

    > * {
      transition: letter-spacing 0.25s cubic-bezier(0.175, 0.885, 0.320, 1.275);
    }

    @media (hover: hover) {
      &:hover {
        > * {
          letter-spacing: 0.5rem;
        }
      }
    }

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
