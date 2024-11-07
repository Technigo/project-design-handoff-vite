import styled from 'styled-components';

export const H1 = styled.h1 `
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  line-height: ${({ theme }) => theme.lineHeights.h1};
  color: ${({ theme }) => theme.text.secondary};
`;
export const SubH1 = styled.h1 `
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.subH1};
  line-height: ${({ theme }) => theme.lineHeights.subH1};
  color: ${({ theme }) => theme.text.secondary};
`;

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  line-height: ${({ theme }) => theme.lineHeights.h2};
`;

export const BodyText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.bodyLarge};
  line-height: ${({ theme }) => theme.lineHeights.bodyLarge};
`;

export const FinePrint = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.finePrint};
  line-height: ${({ theme }) => theme.lineHeights.finePrint};
  color: ${({ theme }) => theme.text.secondary};
`;
