import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { breakpoints } from "../utils/helpers";
import { Button } from "./Button";
import { FinePrint } from "./Typography/BodyText";
import { Heading3 } from "./Typography/Title";

/* Icons */
import Logo from "../assets/animated-logo.svg?react";
import Instagram from "../assets/icons/instagram.svg?react";
import TikTok from "../assets/icons/tiktok.svg?react";
import Share from "../assets/icons/share.svg?react";

/* Animation */
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledFooter = styled.footer`
  ${({ theme, $colorTheme }) => `
    color: ${theme.colors[$colorTheme].color};
    background-color: ${theme.colors[$colorTheme].background};

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    ${breakpoints("min-height", "", [
      {
        0: "100dvh",
      },
      {
        1024: "auto",
      },
    ])};

    ${breakpoints("padding", "", [
      {
        0: `${theme.spacing.xxxlarge} ${theme.spacing.small} ${theme.spacing.xxxlarge}`,
      },
      {
        1024: `${theme.spacing.xxxxlarge} ${theme.spacing.xxlarge} ${theme.spacing.xxlarge}`,
      },
    ])};
  `};
`;

const LinkGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  padding: 0.25rem 0 0;
  margin: ${({ theme }) => theme.spacing.large} 0 0;
`;

const Link = styled.a`
  display: inline-block;
  ${({ theme, $colorTheme }) => `
    text-decoration: underline;
    color: ${theme.colors[$colorTheme].color};
  `};

  > * {
    transition: letter-spacing 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    > * {
      letter-spacing: 0.35rem;
    }
  }
`;

const IconLinkGroup = styled.ul`
  list-style: none;
  display: inline-flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xlarge};
  padding: 0.25rem 0 0;
  margin: ${({ theme }) => theme.spacing.large} 0 0;

  @media screen and (min-width: 1024px) {
    margin-top: ${({ theme }) => theme.spacing.xlarge};
    margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  }
`;

const IconLink = styled.a`
  ${({ theme, $colorTheme }) => `
    text-decoration: underline;
    color: ${theme.colors[$colorTheme].color};
  `};

  svg {
    transform-origin: center;
  }

  &:hover {
    svg {
      animation: ${rotate} 4s linear infinite;
    }
  }
`;

const LogoContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    padding: ${theme.spacing.xxlarge} ${theme.spacing.medium};

    @media screen and (min-width: 375px) {
      padding: ${theme.spacing.xxxxlarge} ${theme.spacing.large};
    }
`};
`;

const StyledLogo = styled(Logo)`
  width: 100%;
  ${breakpoints("max-width", "", [
    {
      0: "65vw",
    },
    {
      1024: "32rem",
    },
  ])};

  @media screen and (min-width: 1024px) {
    position: absolute;
    right: ${({ theme }) => theme.spacing.xlarge};
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Footer = ({ colorTheme }) => {
  return (
    <StyledFooter $colorTheme={colorTheme}>
      <Button url="https://google.com?q=Start+today">Start today</Button>
      <FinePrint>No cost, just kindness*</FinePrint>
      <nav>
        <LinkGroup>
          <li>
            <Link
              $colorTheme={colorTheme}
              href="#"
            >
              <Heading3>Our story</Heading3>
            </Link>
          </li>
          <li>
            <Link
              $colorTheme={colorTheme}
              href="#"
            >
              <Heading3>Contact</Heading3>
            </Link>
          </li>
          <li>
            <Link
              $colorTheme={colorTheme}
              href="#"
            >
              <Heading3>FAQ</Heading3>
            </Link>
          </li>
        </LinkGroup>
        <IconLinkGroup>
          <li>
            <IconLink
              href="#"
              $colorTheme={colorTheme}
            >
              <Instagram />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="#"
              $colorTheme={colorTheme}
            >
              <TikTok />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="#"
              $colorTheme={colorTheme}
            >
              <Share />
            </IconLink>
          </li>
        </IconLinkGroup>
      </nav>
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
