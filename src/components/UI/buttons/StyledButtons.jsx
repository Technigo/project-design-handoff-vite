import styled from 'styled-components';

const shouldForwardProp = prop => !['border', 'width', 'height', 'backgroundColor', 'hoverBackgroundColor', 'hoverColor'].includes(prop);

export const StyledButton = styled.button.withConfig({ shouldForwardProp })`
  padding: 10px;
  border: ${props => props.$border || 'none'};
  border-radius: 30px;
  width: ${props => props.$width || '222px'};
  height: ${props => props.$height || '53px'};
  background-color: ${props => props.$backgroundColor || '#FFD075'};
  color: ${props => props.$color || '#1D1C25'};
  font-size: 16px;
  transition: background-color 0.1s, color 0.1s;

  &:hover {
    background-color: ${props => props.$hoverBackgroundColor || '#FDE6BA'};
    color: ${props => props.$hoverColor || '#1D1C25'};
  }
`;
