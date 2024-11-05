import styled from 'styled-components';
import HeaderSun from '../assets/HeaderSun.png';
import SearchIcon from '../assets/Search.svg';
import MenuIcon from '../assets/Menu.svg';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={HeaderSun} alt="Logo" />
        <Title>Kindness & Compassion</Title>
      </LogoContainer>
      <IconContainer>
        <Icon src={SearchIcon} alt="Search" />
        <Icon src={MenuIcon} alt="Menu" />
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
