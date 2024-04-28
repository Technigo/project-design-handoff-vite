//

//to dos
//writing on mobile
//💡 fix position of button on desktop/tablet

//import styled
import styled from "styled-components";

//import pictues & icons
import CobraPose from "../../public/images/cobrapose.png";
import Location from "../../public/icons/location.png";

//import reusables
import { Button } from "../reusables/Button";

//styles
const HeaderContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 0 68px 0;

  @media all and (min-width: 744px) {
    padding: 0 24px 68px 24px;
  }
  @media all and (min-width: 1024px) {
    padding: 0 124px 68px 124px;
  }
`;

const HeaderTopWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media all and (min-width: 744px) {
    flex-direction: row;
    height: 460px;
  }
`;

const HeaderBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 55px;

  @media all and (min-width: 744px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

const HeaderTitle = styled.h1`
  font-family: "Gerbera";
  font-size: 104px;
  color: var(--primary-white);
  /* letter-spacing: 20px; */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media all and (min-width: 744px) {
    font-size: 128px;
    text-align: center;
    padding: 13px;
  }

  @media all and (min-width: 1024px) {
    font-size: 248px;
    padding: 25px;
  }
`;

const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 10px 0;

  @media all and (min-width: 744px) {
    flex-direction: row;
    padding: 0;
  }
`;

const HeaderIcon = styled.img`
  width: 22px;
  height: 32px;
  margin-bottom: 10px;
`;

const HeaderText = styled.p`
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
      <HeaderTopWrapper>
        <HeaderImage src={CobraPose} alt="Woman doing cobra pose"></HeaderImage>
        <HeaderTitle>Y</HeaderTitle>
        <HeaderTitle>O</HeaderTitle>
        <HeaderTitle>G</HeaderTitle>
        <HeaderTitle>A</HeaderTitle>
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
