import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 100px 0; /* 136px on template */
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100vw;
  max-height: 60vh;
`;

const TopSectionImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  position: relative;
  z-index: 1;

  @media (max-width: 1070px) {
    transform: translateY(-90px);
  }
`;

const TopSectionTitle = styled.h1`
  position: absolute;
  z-index: 0;
  color: #ffffff;
  text-align: center;
  font-family: "Gerbera", sans-serif;
  font-weight: 700;
  font-size: 248px;
  line-height: 331.58px;
  letter-spacing: 10px;
  width: 777px;
  height: 332px;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  margin: 0;

  @media (max-width: 1070px) {
    font-size: 128px;
    line-height: 171.14px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 136px;
  padding: 0 124px;
  width: 100%;
  box-sizing: border-box;
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
`;

const AddressText = styled.p`
  font-family: "Poppins", sans-serif;
  color: #111111;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
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
`;

/* Locationwrapper not on the left side as on the template */

export const TopSection = () => {
  return (
    <TopSectionContainer>
      <ImageWrapper>
        <TopSectionImage src="/images/cobrapose.png" alt="Cobra Pose Image" />
        <TopSectionTitle>YOGA</TopSectionTitle>
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
  );
};
