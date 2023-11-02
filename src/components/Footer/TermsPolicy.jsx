import styled from "styled-components";

const TermsPolicyContainer = styled.div`
  border-radius: 20px;
  border-left: 3px #ffffff solid;
  border-bottom: 3px #ffffff solid;
  margin-bottom: 10px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 10px;

  .terms-policy {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-transform: uppercase;
    gap: 20px;
    padding-top: 10px;
  }

  span {
    text-transform: uppercase;
  }

  img {
    max-width: 20px;
    margin: 20px 0 0 0;
  }
`;

export const TermsPolicy = () => {
  return (
    <TermsPolicyContainer>
      <div className="terms-policy">
        <p>Terms and conditions</p>
        <p className="policy">Privacy policy</p>
      </div>
      <p>
        ©️2023 <span>Prima barre</span>, All Rights Reserved
      </p>
      <img src="/language-orange.svg" alt="Change to another language" />
    </TermsPolicyContainer>
  );
};
