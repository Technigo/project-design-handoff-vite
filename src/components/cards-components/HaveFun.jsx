import havefunMobile from "../../assets/mobileIcons/fun-mobile.png";
import styled from "styled-components";

export const HaveFun = () => {
  return (
    <>
      <HaveFunCard>
        <HaveFunImage></HaveFunImage>
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

  @media(min-width: 600px){
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
