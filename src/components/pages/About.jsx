import useDeviceType from "../useDeviceType";
import {
  Page,
  Container,
  StyledH1,
  StyledH2,
  StyledText,
  StyledImage,
  StyledButton,
  ButtonBox,
} from "../StyledComponents";
import AboutOne from "../../assets/about-one.jpg";
import AboutTwo from "../../assets/about-two.jpg";
import { Carousel } from "react-responsive-carousel";
import {
  AboutInfoBox,
  AboutTextBox,
  AboutTitleBox,
  BuddhaIcon,
  Slide,
  GlassesIcon,
  LotusIcon,
  StyledAboutBox,
  AboutTwoImage,
  TitleBox,
} from "../StyledAbout";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const About = () => {
  const deviceType = useDeviceType();

  if (deviceType === "none") {
    return null;
  }

  return (
    <Page>
      <Container>
        <TitleBox>
          <StyledH1 style={{ alignSelf: "center" }}>Here is the plan:</StyledH1>
        </TitleBox>
        <Carousel Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={false}>
          <StyledAboutBox>
            <Slide>
              <StyledImage src={AboutOne} alt="Midsommar celebration" />
              <StyledText>
                Join us this Midsommar at noon in Djurgården, Stockholm, for a memorable summer celebration with your
                friends, indulging in a revitalizing yoga session amidst the beauty of nature. The activities at our
                feast will include:
              </StyledText>
            </Slide>
          </StyledAboutBox>
          <StyledAboutBox>
            <Slide>
              <AboutInfoBox>
                <AboutTitleBox>
                  <LotusIcon />
                  <StyledH2>Astanga session</StyledH2>
                </AboutTitleBox>
                <AboutTextBox>
                  <StyledText style={{ textAlign: "start" }}>
                    We will kick off our Midsommar festivities with a rejuvenating 120-minute yoga session, featuring a
                    variety of asanas suitable for practitioners of all levels.
                  </StyledText>
                  <StyledText style={{ textAlign: "start" }}>
                    From gentle stretches to more advanced poses, each movement will let you cultivate strength,
                    flexibility, and inner peace, awakening a sense of joy about the summer.
                  </StyledText>
                </AboutTextBox>
              </AboutInfoBox>
              <AboutInfoBox>
                <AboutTitleBox>
                  <BuddhaIcon />
                  <StyledH2>Meditation</StyledH2>
                </AboutTitleBox>

                <AboutTextBox>
                  <StyledText style={{ textAlign: "start" }}>
                    Following our invigorating yoga practice, join us for an hour-long session dedicated to guided
                    breath exercises.
                  </StyledText>
                  <StyledText style={{ textAlign: "start" }}>
                    These exercises are designed to enhance your connection with the present, fostering a sense of joy
                    at this special day.
                  </StyledText>
                </AboutTextBox>
              </AboutInfoBox>
            </Slide>
          </StyledAboutBox>

          <StyledAboutBox>
            <Slide>
              <AboutTwoImage src={AboutTwo} alt="Feast among friends" />
              <AboutInfoBox>
                <AboutTitleBox>
                  <GlassesIcon />
                  <StyledH2>Feast among friends</StyledH2>
                </AboutTitleBox>
                <AboutTextBox>
                  <StyledText style={{ textAlign: "start" }}>
                    Feast among friends. Last but not least we will invite you to gather among friends and indulge in
                    delectable treats.
                  </StyledText>
                  <StyledText style={{ textAlign: "start" }}>
                    You will get baskets brimming with delights, including fresh strawberries, knäckebröd paired with
                    potato salad, smoked salmon and cookies straight from the oven. Oh, and yes - there will be some
                    bubbles.
                  </StyledText>
                </AboutTextBox>
              </AboutInfoBox>
            </Slide>
          </StyledAboutBox>
        </Carousel>
        <ButtonBox style={{ padding: "0 0 var(--gap-medium) 0" }}>
          <StyledButton
            $mobile={deviceType === "mobile"}
            $tablet={deviceType === "tablet"}
            $desktop={deviceType === "desktop"}
            $backgroundColor="var(--pink)"
            $textColor="var(--blue)"
            $border="2px solid var(--blue)"
            className="book about-button"
            aria-label="sign up">
            SIGN UP WITH YOUR FRIENDS
          </StyledButton>
        </ButtonBox>
      </Container>
    </Page>
  );
};
