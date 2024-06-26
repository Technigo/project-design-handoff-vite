import houseMobile from "../../assets/mobileIcons/house-mobile.png";
import houseTablet from "../../assets/tabletIcons/house-tablet.png";
import houseDesktop from "../../assets/desktopIcons/house-desktop.png";
import styled from "styled-components";

export const Live = () => {
  return (
    <>
      <LiveCard>
        <LiveImage alt="Image of a house for accommodation"/>
        <LiveText>
          <h2>Live</h2>
          <p>Enjoy your stay at our cozy cabin in Laax.</p>
        </LiveText>
      </LiveCard>
    </>
  );
};

const LiveCard = styled.div`
  display: flex;

  @media (min-width: 600px) and (max-width: 1199px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    flex-direction: column;
  }
`;

const LiveImage = styled.div`
  background-image: url(${houseMobile});
  background-repeat: no-repeat;
  background-position: left;
  display: flex;
  justify-content: left;
  height: 70px;
  width: 70px;
  padding-top: 40px;

  @media (min-width: 600px) {
    background-image: url(${houseTablet});
    width: 120px;
  }
  @media (min-width: 1999px) {
    background-image: url(${houseDesktop});
    width: 120px;
  }
`;

const LiveText = styled.div`
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
