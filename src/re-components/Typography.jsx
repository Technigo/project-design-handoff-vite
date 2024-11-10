import styled from 'styled-components';

export const H1 = styled.h1 `
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  line-height: ${({ theme }) => theme.lineHeights.h1};
  color: ${({ theme }) => theme.text.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 4.25rem; 
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 8.25rem; 
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 8.25rem; 
  }
`;

export const SubH1 = styled.h1 `
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.subH1};
  line-height: ${({ theme }) => theme.lineHeights.subH1};
  color: ${({ theme }) => theme.text.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
  font-size: 1.625rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 3.875rem; 
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 3.875rem; 
  }
`;

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  line-height: ${({ theme }) => theme.lineHeights.h2};


  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
  font-size: 2.25rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 5.25rem; 
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 5.25rem; 
  }
`;

export const H3 = styled.h3 `
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  line-height: ${({ theme }) => theme.lineHeights.h3};
  color: ${({ theme }) => theme.text.accent};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
  font-size: 1.625rem;
  }
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


  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 1.75rem; 
  }
`;

export const BodyTextSmall = styled.p `
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  line-height: ${({ theme }) => theme.lineHeights.bodySmall};
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  }
`;

export const FinePrint = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.finePrint};
  line-height: ${({ theme }) => theme.lineHeights.finePrint};
  color: ${({ theme }) => theme.text.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
  font-size: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 1.25rem; 
  }
`;

export const FinePrintFooter = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.finePrint};
  line-height: ${({ theme }) => theme.lineHeights.finePrint};
  color: ${({ theme }) => theme.text.accent};
  padding-bottom: ${({ theme }) => theme.spacing.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
  font-size: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 1.25rem; 
  }
`;