import styled from "styled-components";
import heartslogo from "../../public/logo/heartslogo.svg"


// Container for the logo
const LogoContainer = styled.div`
  width: 15.75rem;
  height: 15.75rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
  width: 33.6875rem;
  height: 33.9375rem;
  }
`;

const HeartLogo = styled.img`
width: 100%;
height: 100%;
`;


export const LogoAnimation = () => {
  return (
    <LogoContainer>
      <HeartLogo src={heartslogo} alt="logo with blinking hearts" />
    </LogoContainer>
  );
};





