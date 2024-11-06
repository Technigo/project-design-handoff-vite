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
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;

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
  font-size: 1.5rem;
  font-weight: bold;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
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
  }
`;

const BannerSection = styled.div`
  background-color: #4d492d;
  text-align: center;
  padding: 60px 20px;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
`;

const MainText = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  color: white;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background-color: #FFEC92;
  color: black;
  font-size: 1.5rem;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  margin-top: 30px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #e6c843;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 12px 24px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

export const Header = () => {
  return (
    <div>
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

      <BannerSection>
        <MainText>Sprid en god gärning för en vänligare värld</MainText>
        <SubText>Vi skapar mötesplatser för äkta samtal och goda handlingar</SubText>
        <Button>Läs mer om oss</Button>
      </BannerSection>
    </div>
  );
}
