import styled from "styled-components";

const TermsPolicyContainer = styled.div`
  border-radius: 20px;
  border-left: 3px #ffffff solid;
  border-bottom: 3px #ffffff solid;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-size: 16px;
`;

export const TermsPolicy = () => {
  return (
    <TermsPolicyContainer className="terms-policy">
      <p>TERMS AND CONDITIONS</p>
      <p>PRIVACY POLICY</p>
      <p>©️2023 PRIMA BARRE, All Rights Reserved</p>
      <img src="/language.svg" alt="Switch language" />
    </TermsPolicyContainer>
  );
};
