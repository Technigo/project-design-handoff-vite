import styled from "styled-components";

export const Buttons = () => {
  return (
    <div>
      <Button>Primary button</Button>
    </div>
  );
};

const Button = styled.button`
  display: inline-flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 32px;
  border: 1px solid var(--Powder-Black, #0b1623);
  background: var(--Powder-Accent-1-Regular, #ffa3c4);
  box-shadow: 2px 3px 0px 0px #0b1623;
  color: var(--Powder-Black, #0b1623);

  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;

  &:hover {
    border-radius: 32px;
    border: 1px solid var(--Powder-Black, #0b1623);
    background: var(--Powder-Accent-1-Dark, #f87ba8);
    box-shadow: 2px 3px 0px 0px #0b1623;

  &:active {
  border-radius: 32px;
  border: 1px solid var(--Powder-Black, #0B1623);
  background: linear-gradient(180deg, #D2678E 0%, #F87BA8 59.5%);
  box-shadow: 2px 3px 0px 0px #0B1623;
  }
`;
