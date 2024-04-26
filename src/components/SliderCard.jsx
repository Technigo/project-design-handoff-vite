import PropTypes from "prop-types";
import styled from "styled-components";

export const SliderCard = ({ data }) => {
  return (
    <StyledSliderCard>
      <StyledImgSlider>
        {" "}
        <source media="(min-width:1440px)" srcSet={data.imgdesk} />
        <source media="(min-width: 834px)" srcSet={data.imgtab} />
        <img src={data.img} alt={data.title} />{" "}
      </StyledImgSlider>
      <TitleBox>
        <h3>{data.title}</h3>
        <img src={data.icon}></img>
      </TitleBox>
      <p>{data.description}</p>
    </StyledSliderCard>
  );
};

//Styled Components

export const StyledSliderCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 182px;
  gap: 8px;
  padding: 10px 10px 50px 10px;

  &:hover{
    background-color: rgba(244, 171, 73, 0.1);
    border-radius: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 378px;
  }

  p {
    font-size: 18px;
    line-height: 22px;
  }
`;

const StyledImgSlider = styled.picture`
  height: 243px;
  object-fit: cover;
  width: 182px;
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
