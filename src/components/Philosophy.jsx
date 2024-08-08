import styled from "styled-components";

const PhilosophyContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

/* Header part */
const PhilosophyHeader = styled.header`
  text-align: center;
  width: 100%;
  max-width: 990px;
  margin: 0 auto 40px;
  padding-bottom: 10px;
  box-sizing: border-box;

  @media (max-width: 745px) {
    width: 90%;
    margin: 0 auto;
    padding: 10px;
  }
`;

const Heading = styled.h1`
  font-family: "Gerbera", sans-serif;
  font-weight: 700;
  color: #620981;
  font-size: 64px;
  line-height: 85.57px;
  margin-bottom: 25px;

  @media (max-width: 745px) {
    font-size: 32px;
    line-height: 42.78px;
  }

  @media (max-width: 430px) {
    font-size: 30px;
    line-height: 40.11px;
  }
`;

const SubText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #111111;

  @media (max-width: 745px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 430px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

/* Philosophy content part */
const PhilosophyContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 990px;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 20px;
  position: relative;

  @media (max-width: 745px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;
  }
`;

const TextSection = styled.div`
  flex: 1;
  max-width: 30%;
  text-align: ${({ align }) => align || "left"};

  @media (max-width: 745px) {
    max-width: 100%;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const PhilosophyImage = styled.div`
  flex: 1;
  max-width: 100%;
  position: absolute;
  top: -140px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 745px) {
    position: absolute;
    top: -60px;
    left: 360px;
    width: 517px;
    height: 764px;
    margin-top: 20px;
    justify-content: flex-end;
    order: 2;
  }
`;

const Image = styled.img`
  width: 587px;
  height: 881px;
  object-fit: cover;

  @media (max-width: 745px) {
    width: 100%;
    height: auto;
  }
`;

const TextBlock = styled.div`
  margin-bottom: 50px;

  @media (max-width: 745px) {
    width: 100%;
    max-width: 230px;
    margin-bottom: 25px;
    margin-right: 30px;
  }
`;

const TextHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: #111111;
  margin-bottom: 5px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #620981;
  }

  @media (max-width: 745px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const TextParagraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #505050;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #620981;
  }

  @media (max-width: 745px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const Philosophy = () => {
  return (
    <PhilosophyContainer>
      <PhilosophyHeader>
        <Heading>The philosophy</Heading>
        <SubText>
          We aim to nurture the seeds of a yogic lifestyle, knowing they&apos;ll
          blossom uniquely in each of us. May you discover your center, your
          essence, and make room for it in your daily life.
        </SubText>
      </PhilosophyHeader>

      <PhilosophyContent>
        <TextSection align="left">
          <TextBlock>
            <TextHeading>
              Yama |<br /> Ethical Living
            </TextHeading>
            <TextParagraph>
              Fostering a compassionate and respectful relationship with
              yourself and others.
            </TextParagraph>
          </TextBlock>
          <TextBlock>
            <TextHeading>
              Niyamas |<br /> Personal practises
            </TextHeading>
            <TextParagraph>
              Self-discipline or observances, such as cleanliness, contentment
              and self-discipline.
            </TextParagraph>
          </TextBlock>
          <TextBlock>
            <TextHeading>
              Asana |<br /> Postures
            </TextHeading>
            <TextParagraph>
              Physical postures or poses, which are commonly practiced in modern
              yoga classes.
            </TextParagraph>
          </TextBlock>
          <TextBlock>
            <TextHeading>
              Pranayama |<br /> Mindful breathing
            </TextHeading>
            <TextParagraph>
              Breathing techniques, that aims to calm the mind and enhance the
              flow of prana (life force).
            </TextParagraph>
          </TextBlock>
        </TextSection>

        <PhilosophyImage>
          <Image src="/images/lotuspose.png" alt="Lotus Pose Image" />
        </PhilosophyImage>

        <TextSection align="right">
          <TextBlock>
            <TextHeading>
              Prathyahara |<br /> Turning inward
            </TextHeading>
            <TextParagraph>
              Creating a mental filter, allowing us to focus on what truly
              matters while tuning out the noise.
            </TextParagraph>
          </TextBlock>
          <TextBlock>
            <TextHeading>
              Dharana |<br /> Concentration
            </TextHeading>
            <TextParagraph>
              Training your mind to focus on one thing at a time, which can help
              improve your attention.
            </TextParagraph>
          </TextBlock>
          <TextBlock>
            <TextHeading>
              Dhyana |<br /> De-concentration
            </TextHeading>
            <TextParagraph>
              Meditation, the uninterrupted flow of concentration on an object
              or thought.
            </TextParagraph>
          </TextBlock>
          <TextBlock>
            <TextHeading>
              Samadhi |<br /> Pure bliss
            </TextHeading>
            <TextParagraph>
              Enlightenment or union with the divine, a state of spiritual
              realisation and oneness, with pure awareness.
            </TextParagraph>
          </TextBlock>
        </TextSection>
      </PhilosophyContent>
    </PhilosophyContainer>
  );
};
