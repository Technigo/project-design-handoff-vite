import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWelcomeButton = styled.button`
grid-column: span 4;
  background: none;
  border: none;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  margin-top: 2rem;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

export default function WelcomeButton({ children, onClick }) {
  return (
    <StyledWelcomeButton onClick={onClick}>
      {children}
    </StyledWelcomeButton>
  );
}