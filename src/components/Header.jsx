//import styled
import styled from "styled-components";

//import pictues & icons
import CobraPose from "../../public/images/cobrapose.png";
import Location from "../../public/icons/location.png";

//import reusables
import { Button } from "../reusables/Button";
import { Logo } from "../reusables/Logo";

//styles
const HeaderContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 0 68px 0;
`;

const HeaderNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
`;

const HeaderTopWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 460px;
  width: 100%;
`;

const HeaderBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (min-width: 744px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const HeaderImage = styled.img`
  position: absolute;
  width: 100%;
  max-width: 700px;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`;

//Hamburger
//check library Vittoria chat
const Hamburger = styled.p`
  width: 30px;
  height: 30px;
  background: red;
`;

const HeaderTitle = styled.h1`
  position: absolute;
  top: 50%; //centers vertically
  left: 50%; //centers horizontally
  transform: translate(-50%, -50%) rotate(90deg); //adjusts for rotation and proper centering
  font-family: "Gerbera";
  font-size: 104px;
  color: var(--primary-white);
  letter-spacing: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media all and (min-width: 744px) {
    transform: translate(-50%, -50%);
    font-size: 128px;
    text-align: center;
  }

  @media all and (min-width: 1024px) {
    font-size: 248px;
  }
`;

const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 10px 0;

  @media all and (min-width: 744px) {
    flex-direction: row;
    padding: 0 0 0 16px;
  }

  @media all and (min-width: 1024px) {
  }
`;

const HeaderIcon = styled.img`
  width: 22px;
  height: 32px;
  margin-bottom: 10px;
`;

const HeaderText = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  color: var(--primary-blk);
  text-align: center;

  @media all and (min-width: 744px) {
    text-align: left;
    padding: 0 0 0 10px;
  }

  @media all and (min-width: 1024px) {
  }
`;

//component
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNavigation>
        {/* renders logo based on viewport width */}
        {window.innerWidth >= 1024 ? (
          <Logo type="big" />
        ) : (
          <Logo type="small" />
        )}{" "}
        <Hamburger />
      </HeaderNavigation>
      <HeaderTopWrapper>
        <HeaderImage src={CobraPose} alt="Woman doing cobra pose"></HeaderImage>
        <HeaderTitle>YOGA</HeaderTitle>
      </HeaderTopWrapper>
      <HeaderBottomWrapper>
        <HeaderTextWrapper>
          <HeaderIcon src={Location} alt="Location icon"></HeaderIcon>
          <HeaderText>
            Stockholm <br></br>Åsögatan 96, 128 35
          </HeaderText>
        </HeaderTextWrapper>
        <Button>Check schedule</Button>
      </HeaderBottomWrapper>
    </HeaderContainer>
  );
};
