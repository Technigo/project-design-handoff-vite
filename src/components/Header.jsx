import styled from "styled-components";
import PropTypes from "prop-types";
import { Heading1 } from "./Typography/Title";
import { SubH1 } from "./Typography/Subtitle";
import { FinePrint } from "./Typography/BodyText";
import { Button } from "./Buttons";
import imageData from "../data/image-slider.json";

const HeaderSection = styled.section`
  background-color: ${({ theme, colorTheme }) =>
    theme.colors[colorTheme].background};
  color: ${({ theme, colorTheme }) => theme.colors[colorTheme].color};
  padding: ${({ theme }) =>
    `${theme.spacing.xxxlarge} ${theme.spacing.medium} ${theme.spacing.large}`};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

const StyledSubH1 = styled(SubH1)`
  margin-top: ${({ theme }) => theme.spacing.small};
`;

const ImageSlider = styled.div`
  display: flex;
  max-width: 100%;
  overflow: hidden;
`;

const ImageSliderInner = styled.div`
  display: flex;
  flex: 0 0 100%;
  will-change: transform;
  animation: scrolling 10s linear infinite;

  img {
    min-width: 100vw;
  }

  @keyframes scrolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export const Header = ({ colorTheme }) => {
  return (
    <>
      <HeaderSection colorTheme={colorTheme}>
        <ContentWrapper>
          <Heading1>
            Start spreading smiles
            <StyledSubH1>with small, simple acts</StyledSubH1>
          </Heading1>
          <FinePrint>Natural Magic*</FinePrint>
        </ContentWrapper>
      </HeaderSection>
      <ImageSlider>
        <ImageSliderInner>
          {imageData.images.map((image, index) => (
            <img
              key={index}
              width="390"
              height="390"
              src={image.url}
              alt=""
            />
          ))}
        </ImageSliderInner>
        <ImageSliderInner aria-hidden>
          {imageData.images.map((image, index) => (
            <img
              key={index}
              width="390"
              height="390"
              src={image.url}
              alt=""
            />
          ))}
        </ImageSliderInner>
      </ImageSlider>
      <Button />
    </>
  );
};

Header.propTypes = {
  colorTheme: PropTypes.oneOf(["red", "yellow", "white"]).isRequired,
};

export default Header;
