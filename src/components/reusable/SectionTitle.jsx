import styled from "styled-components";

const StyledSectionTitle = styled.h2`
  font-family: var(--metal-mania);
  font-size: 2rem;
`;

export const SectionTitle = ({ title, className }) => {
  return <StyledSectionTitle className={className}>{title}</StyledSectionTitle>;
};
