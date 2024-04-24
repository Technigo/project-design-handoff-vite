import { PromiseBox, PromiseSmallTextBox, PromiseText, PromiseTextBox } from "../StyledPromise";
import { StyledH2 } from "../StyledComponents";

export const Promise = () => {
  return (
    <PromiseBox>
      <StyledH2>WE PROMISE:</StyledH2>
      <PromiseTextBox>
        <PromiseText>1 000 Calories burned</PromiseText>
        <PromiseText>Beautiful midsommar among friends </PromiseText>
        <PromiseSmallTextBox>
          <PromiseText>3 Hours of Yoga </PromiseText>
          <PromiseText>A delicious feast</PromiseText>
        </PromiseSmallTextBox>
      </PromiseTextBox>
    </PromiseBox>
  );
};
