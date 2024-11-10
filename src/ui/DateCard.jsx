import styled from 'styled-components';

const DateCardContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  color: #000;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  font-size: 1.5rem;
  border: solid;
  padding: 0%;
`;

export const DateCard = ({ date, month }) => (
  <DateCardContainer>
    <strong>{date}</strong>
    <strong>{month}</strong>
  </DateCardContainer>
);
