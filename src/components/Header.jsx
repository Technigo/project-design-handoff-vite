import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { Heading1 } from "./Typography/Title";
import { SubH1 } from "./Typography/Subtitle";
import { FinePrint } from "./Typography/BodyText";
import { breakpoints } from "../utils/helpers";
import imageData from "../data/image-slider.json";

const scrolling = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const HeaderSection = styled.section`
  display: flex;
  ${breakpoints("flex-direction", "", [{ 0: "column" }, { 1200: "row" }])};

  > * {
    flex: 1 1 100%;
  }
`;

const HeaderText = styled.div`
  ${({ theme, $colorTheme }) => `
    background-color: ${theme.colors[$colorTheme].background};
    color: ${theme.colors[$colorTheme].color};
    padding: ${theme.spacing.xxxlarge} ${theme.spacing.small} ${theme.spacing.medium};
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xsmall};
`;

const StyledSubH1 = styled(SubH1)`
  margin-top: ${({ theme }) => theme.spacing.xsmall};
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
  animation: ${scrolling} linear infinite;
  ${breakpoints("animation-duration", "", [{ 0: "10s" }, { 1200: "20s" }])};

  img {
    height: auto;
    ${breakpoints("min-width", "", [{ 0: "100vw" }, { 1200: "50vw" }])};
  }
`;

const RenderImageSliderInner = ({ ariaHidden = false }) => (
  <ImageSliderInner aria-hidden={ariaHidden}>
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
);

RenderImageSliderInner.propTypes = {
  ariaHidden: PropTypes.bool,
};

export const Header = ({ colorTheme }) => (
  <HeaderSection>
    <HeaderText $colorTheme={colorTheme}>
      <ContentWrapper>
        <Heading1>
          Start spreading smiles
          <StyledSubH1>with small, simple acts</StyledSubH1>
        </Heading1>
        <FinePrint>Natural Magic*</FinePrint>
      </ContentWrapper>
    </HeaderText>
    <ImageSlider>
      <RenderImageSliderInner />
      <RenderImageSliderInner ariaHidden />
    </ImageSlider>
  </HeaderSection>
);

Header.propTypes = {
  colorTheme: PropTypes.oneOf(["red", "yellow", "white"]).isRequired,
};
