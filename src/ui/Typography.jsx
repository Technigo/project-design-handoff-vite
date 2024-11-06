import styled from "styled-components";

export const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.font};
  padding: 0 2rem;
  text-align: center;
  text-wrap: balance;
  font-family: Italiana;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 3.375rem */
  letter-spacing: -0.02475rem;
  z-index: 1;
`;

export const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.colors.font};
  text-align: center;
  font-family: Poppins;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
`;

export const StyledBody = styled.p`
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
  text-align: center;
  text-wrap: balance;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem;
  z-index: 1;
`;
