import styled from "styled-components";

export const HeaderCard = styled.div`
  grid-column: span 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;

  @media (min-width: 768px) {
    grid-column: span 8;
  }

  @media (min-width: 1200px) {
    grid-column: span 12;
  }
`;
