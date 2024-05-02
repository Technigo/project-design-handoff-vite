import { ArrowBox, ArrowIcon } from "../StyledArrow";
import { Page, StyledText } from "../StyledComponents";
import useDeviceType from "../useDeviceType";

const Arrow = () => {
  const deviceType = useDeviceType();

  const handleArrowClick = () => {
    window.scrollTo({
      top: window.scrollY + 600,
      behavior: "smooth",
    });
  };

  if (deviceType === "none") {
    return null;
  }

  return (
    <Page>
      <ArrowBox>
        <StyledText style={{ fontSize: deviceType === "tablet" ? "18px" : "inherit" }}>
          Find out more about event
        </StyledText>
        <ArrowIcon onClick={handleArrowClick} />
      </ArrowBox>
    </Page>
  );
};

export default Arrow;
