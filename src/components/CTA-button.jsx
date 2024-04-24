import styled from 'styled-components';

export const CtaButton = styled.button`
  background-color: var(--purple);
  border: none;
  z-index: 3;
  font-size: 16px;
  border-radius: 20px;
  width: 136px;
  height: 40px;
  transition: background-color 0.2s ease; 

  &:hover {
    background-color: var(--purplehover);
    cursor: pointer;
  }

  &:active {
    background-color: var(--purpleclick);
  }
  @media (min-width: 744px) and (max-width: 1493px) {
     font-size: 18px;
        }

   @media (min-width: 1494px) {
     font-size: 20px;
        }
`;


