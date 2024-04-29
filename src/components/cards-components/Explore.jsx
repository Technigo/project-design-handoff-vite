import exploreMobile from "../../assets/mobileIcons/explore-mobile.png";
import styled from "styled-components";

export const Explore = () => {
  return (
    <>
      <ExploreCard>
        <ExploreImage></ExploreImage>
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

  @media(min-width: 600px){
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
