import styled from "styled-components";
import quoteImage from "../../public/sunset.jpg";

//to do
//check paddings -> design on the left side

//styles
const ImageContainer = styled.section`
  background-image: url(${quoteImage});
  background-size: cover;
  display: flex;
  align-items: center;
  width: 100%;
  height: 362px;

  @media all and (min-width: 744px) {
    height: 408px;
  }

  @media all and (min-width: 1024px) {
    height: 789px;
  }
`;

const QuoteText = styled.h1`
  font-family: "Argue";
  font-size: 40px;
  color: var(--primary-white);
  text-align: center;
  padding: 66px 35px;

  @media all and (min-width: 744px) {
    font-size: 58px;
    padding: 100px 58px;
  }

  @media all and (min-width: 1024px) {
    font-size: 106px;
    padding: 195px 126px;
  }
`;

//component
export const Quote = () => {
  return (
    <ImageContainer>
      <QuoteText>INHALE THE FUTURE EXHALE THE PAST.</QuoteText>
    </ImageContainer>
  );
};
