import styled from "styled-components";
import { HeroButton } from "../UI/Button";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <Logo src="/Images/KC-logo.png" alt="Picture of Logo" />
        <NavText>Kindness & Compassion</NavText>
        <SearchIcon src="/Images/search-icon.png" alt="Search Icon" />
        <MenuIcon src="/Images/menu-icon.png" alt="Menu Icon" />
      </NavBar>

      <HeroContainer>
        <HeroImage src="/Images/Hero-image.png" alt="Hero" />
        <HeroText>
          <HeroTitle>Sprid en god <br />gärning för en <br />vänligare värld</HeroTitle>
          <HeroSubtitle>Vi skapar mötesplatser för äkta <br /> samtal och goda handlingar</HeroSubtitle>
          <HeroButton>Läs mer om oss</HeroButton>
        </HeroText>
      </HeroContainer>
    </HeaderContainer>
  );
};


// Styling

const HeaderContainer = styled.div`
  width: 100%;
`;

const NavBar = styled.nav`
  color: #000;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 130%;
  display: flex;
  align-items: center;
  height: 55px;
  padding: 10px;
  gap: 10px;

  @media (min-width: 768px) {
        margin-left: 230px;
  }

  @media (min-width: 1024px) {
   margin-left: 500px;
   }
`;

const Logo = styled.img`
  display: flex;
  justify-content: flex-start;
`;

const NavText = styled.p`
  display: flex;
  text-align: center;
  align-items: center;
  padding: 10px;
`;

const MenuIcon = styled.img`
 margin-left: 30px;
`;

const SearchIcon = styled.img`
 margin-left: 10px;
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 535px;
  padding-bottom: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 20px;
  margin-top: 10px;


`;

const HeroTitle = styled.h1`
font-size: 40px;
  margin-bottom: 25px;
  margin-top: 30px;


`;

const HeroSubtitle = styled.p`
 font-size: 24px;
 color: #fff;
background-color: #00000033;
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
font-family: "Roboto Serif", serif;
font-style: italic;
font-weight: 500;
line-height: 130%;
width: 393px;
margin-bottom: 32px;

`;



export default Header;
