import styled from "styled-components";
import { Headings } from "../Components/Headings";

const ReviewWrapper = styled.section`
  margin: 35px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: #C0AB9B;
  padding: 0 16px;
`

const HeadingWrapper = styled.div`
  padding: 0;
  background-image: url("./images/Bookmark_1.png"), url("./images/Bookmark_2.png");
  background-repeat: no-repeat, no-repeat;
  background-size: contain;
  background-position: left center, right center; 
  width: 250px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 660px) {
    width: 40%;
  }

  @media (min-width: 835px) {
    width: 30%;
  }

  @media (min-width: 1293px) {
    width: 22%;
  }
`
const ReviewInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

const IndividualReview = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const ReviewText = styled.p`
  font-size: 13px;
  font-weight: var(--heading-weight);
  line-height: 15.74px;

  @media (min-width: 835px) {
    font-size: 25px;
    line-height: 30.28px;
  }
`

export const Reviews = () => {
  const sectionId = 3;

  return (
    <ReviewWrapper>
      <HeadingWrapper>
        <Headings sectionId={sectionId} />
      </HeadingWrapper>
      <ReviewInfo>
        <IndividualReview>
          <ReviewText>I love seeing the tracker and my progress!</ReviewText>
          <ReviewText>Cole <i>Kansas City</i></ReviewText>
        </IndividualReview>
        <IndividualReview>
          <ReviewText>I am a sucker for free things so getting a free video every 5 days in a row I complete has been awesome! It motivates me to move my body :&#41;</ReviewText>
          <ReviewText>Hannah <i>Pennsylvania</i></ReviewText>
        </IndividualReview>
      </ReviewInfo>
      
    </ReviewWrapper>
  )
}
