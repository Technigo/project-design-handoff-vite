import styled from "styled-components";
import PropTypes from "prop-types";

export const SliderCard = ({ data }) => {
  return (
    <StyledSliderCard>
      <img src={data.img} alt={data.title}></img>
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

  p{
    font-size: 18px;
    line-height: 22px;
  }
`;

const TitleBox = styled.div`
  display: flex;
`;

SliderCard.propTypes = {
  data: PropTypes.object,
};
