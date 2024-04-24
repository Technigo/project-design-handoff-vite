import styled from "styled-components";

// Styled button component
const StyledButton = styled.button`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px;
  background: #b3583b;
  color: #fff;
  font-family: Avenir, sans-serif;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 48px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
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
