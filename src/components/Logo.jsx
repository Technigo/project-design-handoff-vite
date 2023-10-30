import styled from "styled-components";

const LogoText = styled.p`
  font-family: var(--logo-font);
  font-size: 1.375rem;

  @media (min-width: 834px) {
    font-size: 2.5rem;
  }
`;

export const Logo = ({ text }) => {
  return (
    <>
      <LogoText>{text}</LogoText>
    </>
  )
}
