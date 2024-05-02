import { LotusIcon } from "../StyledAbout";
import { Page, StyledH2, StyledText } from "../StyledComponents";
import QuestionImage from "../../assets/questions.jpg";
import {
  QuestionContainer,
  QuestionImg,
  QuestionInfoBox,
  QuestionTextBox,
  QuestionImgContainer,
  QuestionSmallTextBox,
} from "../StyledQuestions";
import useDeviceType from "../useDeviceType";

export const Questions = () => {
  const deviceType = useDeviceType();

  if (deviceType === "none") {
    return null;
  }

  return (
    <Page>
      <QuestionContainer>
        <LotusIcon />
        <StyledH2>Frequently asked questions</StyledH2>
        <QuestionInfoBox>
          <QuestionImgContainer>
            <QuestionImg src={QuestionImage} alt="Meditation position on a yoga mat" />
          </QuestionImgContainer>
          <QuestionTextBox>
            <QuestionSmallTextBox>
              <StyledH2>What should I bring with me?</StyledH2>
              <StyledText>
                We recommend bringing a yoga mat, comfortable clothing suitable for movement, a water bottle, and any
                props you typically use during your practice. Don&apos;t forget sunscreen and a hat because our event is
                outdoors!
              </StyledText>
            </QuestionSmallTextBox>

            <QuestionSmallTextBox>
              <StyledH2>Can I bring children to the event?</StyledH2>
              <StyledText>
                Yes, children are welcome to join the event! However, please note that our yoga sessions are primarily
                designed for adults. We recommend assessing whether the event atmosphere and activities are suitable for
                your child&apos;s age and interests. Parental supervision is required for children attending the event.
              </StyledText>
            </QuestionSmallTextBox>

            <QuestionSmallTextBox>
              <StyledH2>What happens if it rains on Midsommar?</StyledH2>
              <StyledText>
                In the event of inclement weather, we will provide updates via email and our website regarding any
                changes to the event schedule or location. If the event is moved indoors registered participants will be
                notified accordingly. Please ensure your contact information is up-to-date to receive timely updates.
              </StyledText>
            </QuestionSmallTextBox>
          </QuestionTextBox>
        </QuestionInfoBox>
      </QuestionContainer>
    </Page>
  );
};
