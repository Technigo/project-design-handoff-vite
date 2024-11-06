import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #E07C3E;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background: #D06932; /* Lätt mörkare ton för hover-effekt */
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5); /* Fokus-effekt */
  }
`;

const ButtonText = styled.span`
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: 'Open Sans';
  font-weight: 700;
  line-height: 22.4px;
  word-wrap: break-word;
`;

const ButtonComponent = () => {
  return (
    <StyledButton>
      <ButtonText>Button</ButtonText>
    </StyledButton>
  );
};

export default ButtonComponent;