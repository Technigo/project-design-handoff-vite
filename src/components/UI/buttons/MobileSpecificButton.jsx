import styled from 'styled-components';
import { StyledButton } from './StyledButtons';


export const MobileSpecificButton = styled(StyledButton)`
  @media (max-width: 768px) {
    width: 168px; 
    height: 53px;
  }
`;
