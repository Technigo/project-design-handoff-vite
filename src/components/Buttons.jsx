import styled from "styled-components";

export const Buttons = () => {
  return (
    <div>
      <Button>Primary button</Button>
      <CtaButton>Special CTA button</CtaButton>
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
`;

const CtaButton = styled(Button)`
  border-radius: 32px;
  border: 1px solid var(--Powder-Black, #0b1623);
  background: var(--Powder-Accent-2, #f2ff49);
  box-shadow: 2px 3px 0px 0px #0b1623;
  display: ;
`;
