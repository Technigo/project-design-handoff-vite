import { ArrowBox, ArrowIcon } from "../StyledArrow";

import { Page, StyledText } from "./StyledComponents";

const Arrow = () => {
  const handleArrowClick = () => {
    window.scrollTo({
      top: window.scrollY + 600,
      behavior: "smooth",
    });
  };
  return (
    <Page>
      <ArrowBox>
        <StyledText>Find out more about event</StyledText>
        <ArrowIcon onClick={handleArrowClick} />
      </ArrowBox>
    </Page>
  );
};

export default Arrow;
