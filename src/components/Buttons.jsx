import styled from "styled-components";

// Styled button component
const StyledButton = styled.button`
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
  border-radius: 12px;
  background: #b3583b;
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
