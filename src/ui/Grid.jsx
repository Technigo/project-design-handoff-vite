import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

@media (min-width: 768px) {
  grid-template-columns: repeat(8, 1fr);
}
@media (min-width: 1200px) {
  grid-template-columns: repeat(12, 1fr);
}
`
