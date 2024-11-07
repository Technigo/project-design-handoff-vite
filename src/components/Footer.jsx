import styled from "styled-components";
import PropTypes from "prop-types";
import { breakpoints } from "../utils/helpers";
import { Button } from "./Button";
import { FinePrint } from "./Typography/BodyText";
import Logo from "../assets/animated-logo.svg?react";

const StyledFooter = styled.footer`
  ${({ theme, $colorTheme }) => `
    color: ${theme.colors[$colorTheme].color};
    background-color: ${theme.colors[$colorTheme].background};
    ${breakpoints("padding", "", [
      {
        0: `${theme.spacing.xxxlarge} ${theme.spacing.small} ${theme.spacing.medium}`,
      },
      {
        1024: `${theme.spacing.xxxlarge} ${theme.spacing.large} ${theme.spacing.xlarge}`,
      },
    ])};
  `};
`;

const LogoContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    padding: ${theme.spacing.xxlarge} ${theme.spacing.large};
`};
`;

const StyledLogo = styled(Logo)`
  ${breakpoints("max-width", "", [
    {
      0: "65vw",
    },
    {
      1024: "25vw",
    },
  ])};
`;

export const Footer = ({ colorTheme }) => {
  return (
    <StyledFooter $colorTheme={colorTheme}>
      <Button href="https://google.com?q=Start+today">Start today</Button>
      <FinePrint>No cost, just kindness*</FinePrint>
      <LogoContainer>
        <StyledLogo />
      </LogoContainer>
      <FinePrint>** Acts of kindness are highly contagious © 2024</FinePrint>
    </StyledFooter>
  );
};

Footer.propTypes = {
  colorTheme: PropTypes.oneOf(["red", "yellow", "white"]).isRequired,
};
