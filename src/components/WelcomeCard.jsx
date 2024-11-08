import styled from 'styled-components';

export const WelcomeCard = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  background-color: #fff;

  @media (min-width: 768px) {
    grid-column: span 8;
  }

  @media (min-width: 1200px) {
    grid-column: span 12;
  }
`
