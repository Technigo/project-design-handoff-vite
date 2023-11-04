import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 30px;
  width: 222px;
  height: 53px;
  background-color: ${props => props.backgroundColor || '#FFD075'};
  color: ${props => props.color || '#1D1C25'};
  font-size: 16px;
`;

