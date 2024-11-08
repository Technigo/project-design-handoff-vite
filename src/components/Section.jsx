import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSection = styled.section`
  background-color: ${({ theme, $colorTheme }) =>
    theme.colors[$colorTheme].background};
  color: ${({ theme, $colorTheme }) => theme.colors[$colorTheme].color};
  padding: ${({ theme, $paddingTop }) =>
    `${theme.spacing[$paddingTop]} ${theme.spacing.small} ${theme.spacing.medium}`};
  overflow: hidden;
`;

export const Section = ({ children, colorTheme, paddingTop = "large" }) => {
  return (
    <>
      <StyledSection
        $colorTheme={colorTheme}
        $paddingTop={paddingTop}
      >
        {children}
      </StyledSection>
    </>
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
    "xxxlarge",
  ]),
};
