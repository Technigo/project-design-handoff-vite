import PropTypes from "prop-types";
import styled from "styled-components";

export const InstructorsSliderCard = ({ data }) => {
  return (
    <StyledSliderCard>
      <StyledImgSlider src={data.img} alt={data.title} />
      <TitleBox>
        <h3 className="inst-title">{data.title}</h3>
        <p className="work-title">{data.description}</p>
      </TitleBox>
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
`;

const StyledImgSlider = styled.img`
  height: 274px;
  width: 182px;
  object-fit: cover;
  border-radius: 10px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .inst-title {
    font-size: 21px;
    font-weight: bold;
  }
  .work-title {
    font-size: 18px;
    line-height: 22px;
  }
`;

InstructorsSliderCard.propTypes = {
  data: PropTypes.object,
};
