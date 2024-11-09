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
  /* padding-bottom: ${({ theme }) => theme.spacing.xsmall}; */
`;

export const H3 = styled.h3 `
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  line-height: ${({ theme }) => theme.lineHeights.h3};
  color: ${({ theme }) => theme.text.accent};
`;

export const BodyText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.bodyLarge};
  line-height: ${({ theme }) => theme.lineHeights.bodyLarge};
`;

export const BodyTextLarge = styled.p `
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.bodyLarge};
  line-height: ${({ theme }) => theme.lineHeights.bodyLarge};
`;

export const BodyTextSmall = styled.p `
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  line-height: ${({ theme }) => theme.lineHeights.bodySmall};
`;

export const FinePrint = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.finePrint};
  line-height: ${({ theme }) => theme.lineHeights.finePrint};
  color: ${({ theme }) => theme.text.secondary};
`;

export const FinePrintFooter = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.finePrint};
  line-height: ${({ theme }) => theme.lineHeights.finePrint};
  color: ${({ theme }) => theme.text.accent};
  /* padding-top: ${({ theme }) => theme.spacing.medium}; */
  padding-bottom: ${({ theme }) => theme.spacing.medium};
  ;
`;
