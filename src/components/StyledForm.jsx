import styled, { css } from "styled-components";
import Minus from "../assets/Minus.svg";
import Plus from "../assets/Plus.svg";

export const MinusIcon = styled(Minus)`
  width: 24px;
  height: 12.84px;
  cursor: pointer;
`;

export const PlusIcon = styled(Plus)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-compact);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: var(--gap-compact) var(--gap-default);
  border: 2px solid #1c2996;
`;

export const FlexibleButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.disabled ? "gray" : "pink")};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ${(props) =>
    props.$mobile &&
    css`
      font-size: 18px;
      flex: 1;
      line-height: 28.8px;
      letter-spacing: 0.5px;
    `}

  ${(props) =>
    props.$tablet &&
    css`
      font-size: 18px;
    `}

${(props) =>
    props.$desktop &&
    css`
      font-size: 20px;
    `}
`;

export const IncrementDecrementContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 115px;
  border: 2px solid #1c2996;
`;

export const NumberInput = styled.input`
  padding: 10px;
  border: none;
  text-align: center;
  width: 43px;
  height: 53px;
  font-family: Lato;
  font-weight: 400;
  font-size: 18px;
  line-height: 28.8px;
  color: #1c2996;
`;

export const CounterBox = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: var(--gap-compact);
`;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--gap-comfortable);
  margin: 24px 0;
`;

export const TotalBox = styled.div`
  font-family: Yeseva One;
  font-size: 48px;
  font-weight: 400;
  line-height: 55.44px;
  text-align: center;
  color: #1c2996;
`;
