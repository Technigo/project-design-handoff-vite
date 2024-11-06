import styled from "styled-components";

export const WelcomeCard = styled.div`
grid-column: span 4;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
flex-shrink: 0;


@media (min-width: 768px) {
    grid-column: span 8;
  }

  @media (min-width: 1200px) {
    grid-columns: span 12;
  }
`