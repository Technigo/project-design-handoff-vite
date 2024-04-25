import PropTypes from "prop-types";
import styled from "styled-components";

export const InstructorsSliderCard = ({ data }) => {
  return (
    <StyledSliderCard>
      <StyledImgSlider>
        {" "}
        <source media="(min-width: 834px)" srcSet={data.imgtab} />
        <img id="inst-pic-mobile" src={data.img} alt={data.title} />{" "}
      </StyledImgSlider>
      <h3 className="inst-title">{data.title}</h3>
      <p className="work-title">{data.description}</p>
    </StyledSliderCard>
  );
};

//Styled Components

const StyledSliderCard = styled.div`
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

const StyledImgSlider = styled.picture`
  height: 274px;
  width: 182px;
  object-fit: cover;

  #inst-pic-mobile {
    height: 274px;
    width: 182px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

InstructorsSliderCard.propTypes = {
  data: PropTypes.object,
};
