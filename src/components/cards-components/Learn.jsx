import snowboarderMobile from "../../assets/mobileIcons/snowboarder-mobile.png";
import styled from "styled-components";

export const Learn = () => {
  return (
    <>
      <LearnCard>
        <LearnImage></LearnImage>
        <LearnText>
          <h2>Learn</h2>
          <p>
            Beginners and advanced lessons in small groups and wonderful
            coaches.
          </p>
        </LearnText>
      </LearnCard>
    </>
  );
};

const LearnCard = styled.div`
  display: flex;
  @media(min-width: 600px){
    flex-direction: column;
  }
`;

const LearnImage = styled.div`
  background-image: url(${snowboarderMobile});
  background-repeat: no-repeat;
  background-position: left;
  display: flex;
  justify-content: left;
  height: 70px;
  width: 70px;
  padding-top: 45px;
`;

const LearnText = styled.div`
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
