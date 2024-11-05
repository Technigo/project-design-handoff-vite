import havefunMobile from "../../assets/mobileIcons/fun-mobile.png";
import havefunTablet from "../../assets/tabletIcons/fun-tablet.png";
import havefunDesktop from "../../assets/desktopIcons/fun-desktop.png";
import styled from "styled-components";

export const HaveFun = () => {
  return (
    <>
      <HaveFunCard>
        <HaveFunImage alt="Image of a microphone"/>
        <HaveFunText>
          <h2>Have fun</h2>
          <p>
            Experience the full shebang with live bands, karaoke shindigs, movie
            nights, and more!
          </p>
        </HaveFunText>
      </HaveFunCard>
    </>
  );
};

const HaveFunCard = styled.div`
  display: flex;

  @media (min-width: 600px) and (max-width: 1199px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    flex-direction: column;
  }
`;

const HaveFunImage = styled.div`
  background-image: url(${havefunMobile});
  background-repeat: no-repeat;
  background-position: left;
  display: flex;
  justify-content: left;
  height: 70px;
  width: 70px;
  padding-top: 40px;
  @media (min-width: 600px) {
    background-image: url(${havefunTablet});
    width: 120px;
  }
  @media (min-width: 1999px) {
    background-image: url(${havefunDesktop});
    width: 120px;
  }
`;

const HaveFunText = styled.div`
  width: 280px;
  h2 {
    color: #0b1623;
    font-size: 21px;
    font-family: Philosopher;
    font-weight: 700;
    line-height: 27.3px;
    word-wrap: break-word;
  }
  p {
    color: var(--Powder-Black, #0b1623);
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }
`;
