import styled from "styled-components";

export const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.font};
  text-align: center;
  font-family: Italiana;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 3.375rem */
  letter-spacing: -0.02475rem;
  z-index: 1;
`;

export const StyledH2 = styled.h2`
  color: var(--color-font);
  text-align: center;
  font-family: Poppins;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
`;

export const StyledBody = styled.p`
  color: var(--color-font);
  text-align: center;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 1;
`;
