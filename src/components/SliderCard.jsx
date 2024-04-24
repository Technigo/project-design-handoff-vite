import PropTypes from "prop-types";
import styled from "styled-components";

export const SliderCard = ({ data }) => {
  return (
    <StyledSliderCard>
      <StyledImgSlider src={data.img} alt={data.title}></StyledImgSlider>
      <TitleBox>
        <h3>{data.title}</h3>
        <img src={data.icon}></img>
      </TitleBox>
      <p>{data.description}</p>
    </StyledSliderCard>
  );
};

//Styled Components

const StyledSliderCard = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 11px;
  width: 182px;
  gap: 8px;

  p {
    font-size: 18px;
    line-height: 22px;
  }
  //Check if Netlify takes over right font-size for both sliders! Also H3
  //It takes it over when I save this folder but the it looses it again... Why?
`;

const StyledImgSlider = styled.img`
  height: ${({ $longcard }) => ($longcard ? "274px" : "243px")};
`;

const TitleBox = styled.div`
  display: flex;

  h3 {
    font-size: 21px;
    font-weight: bold;
  }
`;

SliderCard.propTypes = {
  data: PropTypes.object,
};
