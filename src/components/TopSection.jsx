import styled from "styled-components";

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100%;
`;

const TopSectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 225px 0; /* 136px on template */

  @media (min-width: 1650px) {
    margin-top: 150px;
  }

  @media (max-width: 930px) {
    padding: 136px 0;
  }

  @media (max-width: 569px) {
    padding: 80px 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TopSectionImage = styled.img`
  width: 85vw;
  height: auto;
  object-fit: contain;
  position: absolute;
  z-index: 2;

  @media (max-width: 430px) {
    transform: scale(2.7);
    transform-origin: center;
    top: 10px;
  }

  @media (max-width: 390px) {
    transform: scale(2.6);
    transform-origin: center;
    top: 30px;
  }

  @media (max-width: 360px) {
    transform: scale(2.6);
    transform-origin: center;
    top: 50px;
  }
`;

const TopSectionTitle = styled.h1`
  position: absolute;
  z-index: 1;
  color: #ffffff;
  text-align: center;
  font-family: "Gerbera", sans-serif;
  font-weight: 700;
  font-size: 15vw; /* should be 248px; = 12.9vw on template */
  line-height: 1;
  letter-spacing: 1.3vw;
  padding-top: 25px;
  width: 100%;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 430px) {
    font-size: 80px; /* should be 104px; = ?vw on template */
    writing-mode: vertical-rl;
    text-orientation: upright;
    letter-spacing: -5px;
    padding-top: 220px;
    justify-content: center;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
  padding: 0 124px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 1650px) {
    margin-top: 380px;
  }

  @media (max-width: 1050px) {
    margin-top: 180px;
  }

  @media (max-width: 750px) {
    margin-top: 150px;
  }

  @media (max-width: 430px) {
    margin-top: 330px;
  }
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const LocationIcon = styled.img`
  width: 28px;
  height: 39px;
  margin-right: 15px;

  @media (max-width: 750px) {
    width: 16px;
    height: 23px;
  }
`;

const AddressText = styled.p`
  font-family: "Poppins", sans-serif;
  color: #111111;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0;

  @media (max-width: 750px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const TopSectionButton = styled.button`
  width: 300px;
  height: 60px; /* 64px on template */
  border-radius: 60px;
  padding: 10px;
  font-size: 24px;
  letter-spacing: 1px; /* not on template */
  background-color: #620981;
  color: #ffffff;
  border: none;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #430159;
  }

  @media (max-width: 750px) {
    width: 182px;
    height: 38px;
    font-size: 14px; /* 15px on template */
  }
`;

export const TopSection = () => {
  return (
    <Wrapper>
      <TopSectionContainer>
        <ImageWrapper>
          <TopSectionTitle>YOGA</TopSectionTitle>
          <TopSectionImage src="/images/cobrapose.png" alt="Cobra Pose Image" />
        </ImageWrapper>
        <ContentWrapper>
          <LocationWrapper>
            <LocationIcon src="/icons/location.svg" alt="Location Icon" />
            <AddressText>
              Stockholm <br />
              Åsögatan 96, 128 35
            </AddressText>
          </LocationWrapper>
          <TopSectionButton>Check schedule</TopSectionButton>
        </ContentWrapper>
      </TopSectionContainer>
    </Wrapper>
  );
};
