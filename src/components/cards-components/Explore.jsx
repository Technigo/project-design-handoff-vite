import exploreMobile from "../../assets/mobileIcons/explore-mobile.png";
import exploreTablet from "../../assets/tabletIcons/explore-tablet.png";
import exploreDesktop from "../../assets/desktopIcons/explore-desktop.png";
import styled from "styled-components";

export const Explore = () => {
  return (
    <>
      <ExploreCard>
        <ExploreImage alt="Image of a map"/>
        <ExploreText>
          <h2>Explore</h2>
          <p>
            Check out the village, enjoy tasty food and explore wonderful
            places.
          </p>
        </ExploreText>
      </ExploreCard>
    </>
  );
};

const ExploreCard = styled.div`
  display: flex;

  @media (min-width: 600px) and (max-width: 1199px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    flex-direction: column;
  }
`;

const ExploreImage = styled.div`
  background-image: url(${exploreMobile});
  background-repeat: no-repeat;
  background-position: left;
  display: flex;
  justify-content: left;
  height: 70px;
  width: 70px;
  padding-top: 35px;

  @media (min-width: 600px) {
    background-image: url(${exploreTablet});
    width: 120px;
  }
  @media (min-width: 1999px) {
    background-image: url(${exploreDesktop});
    width: 120px;
  }
`;

const ExploreText = styled.div`
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
