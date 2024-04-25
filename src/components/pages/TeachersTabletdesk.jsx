import useDeviceType from "../useDeviceType";
import { StyledTeacherOne, StyledTeacherTwo, TeacherTitleBox } from "../StyledTeachers";
import { Page, Container, StyledH1, StyledH2, StyledText } from "../StyledComponents";
import TeacherOne from "../../assets/teacher-one.jpg";
import TeacherTwo from "../../assets/teacher-two.jpg";
import { AboutInfoBox, AboutTextBox, AboutTitleBox, Slide, StyledAboutBox } from "../StyledAbout";

export const TeachersTabletdesk = () => {
  const deviceType = useDeviceType();

  if (deviceType !== "tablet") {
    return null;
  }

  return (
    <Page>
      <Container>
        <TeacherTitleBox>
          <StyledH1 style={{ alignSelf: "center" }}>Get to know our yoga teachers:</StyledH1>
        </TeacherTitleBox>

        <StyledAboutBox>
          <Slide>
            <StyledTeacherOne src={TeacherOne} alt="Astrid Andersson" />
            <AboutInfoBox>
              <AboutTitleBox>
                <StyledH2>Astrid Andersson</StyledH2>
              </AboutTitleBox>
              <AboutTextBox>
                <StyledText style={{ textAlign: "start" }}>
                  Astrid received their 200- and 300-hour teacher certification through Sunny Yoga. She are also a
                  high-school science educator with the mission to bring equitable education, of mind, body, and spirit,
                  to students across identity and experience.
                </StyledText>
              </AboutTextBox>
            </AboutInfoBox>
          </Slide>
        </StyledAboutBox>

        <StyledAboutBox>
          <Slide>
            <StyledTeacherTwo src={TeacherTwo} alt="Frida Berg" />
            <AboutInfoBox>
              <AboutTitleBox>
                <StyledH2>Frida Berg</StyledH2>
              </AboutTitleBox>
              <AboutTextBox>
                <StyledText style={{ textAlign: "start" }}>
                  Frida is a tech professional and yoga instructor. She received her a 200- and 300-hour through Sunny
                  Yoga. Frida believes that this simple yet powerful practice informs the way we communicate with
                  ourselves and the way we communicate with the world.
                </StyledText>
              </AboutTextBox>
            </AboutInfoBox>
          </Slide>
        </StyledAboutBox>
      </Container>
    </Page>
  );
};
