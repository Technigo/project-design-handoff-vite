import styled from "styled-components";

const SignInButtonContainer = styled.button`
  background-color: #ffffff;
  color: #c00202;
  border-radius: 10px;
  font-size: 8px;
  font-weight: 800;
  padding: 0 6px;
  text-align: center;
  /* word-wrap: break-word; */
  border: none;
`;

export const SignInButton = () => {
  return (
    <SignInButtonContainer>
      <span>SIGN IN</span>
    </SignInButtonContainer>
  );
};
