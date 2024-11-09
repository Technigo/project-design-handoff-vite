import styled from "styled-components";
import heartslogo from "../../public/logo/heartslogo.svg"


// Container for the logo
const LogoContainer = styled.div`
  width: 252px;
  height: 252px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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





