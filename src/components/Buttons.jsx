import styled from "styled-components";

// Styled button component
const StyledButton = styled.button`
  border-radius: 12px;
  background: #b3583b;
  color: #fff;
  font-family: Avenir, sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 48px;
  border: none;
  cursor: pointer;
`;


export const Buttons = ({ buttonList }) => {
  return (
    <div>
      {buttonList.map((button, index) => (
        <StyledButton
          key={index}
          onClick={() => console.log(button.buttonText)}
        >
          {button.buttonText}
        </StyledButton>
      ))}
    </div>
  );
};
