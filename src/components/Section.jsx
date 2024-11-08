import styled from "styled-components";
import PropTypes from "prop-types";
import { breakpoints } from "../utils/helpers";

const StyledSection = styled.section`
  ${({ theme, $colorTheme, $paddingTop }) => `
    background-color: ${theme.colors[$colorTheme].background};
    color: ${theme.colors[$colorTheme].color};

    ${breakpoints("padding", "", [
      {
        0: `${theme.spacing[$paddingTop]} ${theme.spacing.small} ${theme.spacing.medium}`,
      },
      {
        1024: `${theme.spacing[$paddingTop]} ${theme.spacing.xlarge} ${theme.spacing.medium}`,
      },
    ])};
  `}
`;

export const Section = ({ children, colorTheme, paddingTop = "large" }) => {
  return (
    <StyledSection $colorTheme={colorTheme} $paddingTop={paddingTop}>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  colorTheme: PropTypes.oneOf(["red", "yellow", "white"]).isRequired,
  paddingTop: PropTypes.oneOf([
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
    "xxxxlarge",
  ]),
};
