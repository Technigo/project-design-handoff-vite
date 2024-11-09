import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default GridContainer;
