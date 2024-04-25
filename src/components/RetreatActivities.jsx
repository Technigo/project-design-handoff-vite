import styled from "styled-components";
import { CardActivities } from "../utility/CardActivities";
import { activities } from "../utility/ActivityData";
import { breakpoints } from "../utility/breakpoints";

export function RetreatActivities() {
  const introText = "Book your stay and dive into practical workshops and activities that go beyond the clichés, offering tangible ways to reshape habits and enrich your daily experience. Customize your stay, choose your adventures, and embrace a journey that's grounded in reality, accessible to everyone seeking a more fulfilling life."

  return (
    <ActivitiesSection>
      <IntroText>{introText}</IntroText>
      {activities.map((activity, index) => (
        <CardActivities
          key={index}
          imageSrc={`/images/${activity.image}`}
          title={activity.name}
          description={activity.description}
        />
      ))}
    </ActivitiesSection>
  );
}


const ActivitiesSection = styled.section`
display: flex;
  padding: 96px 128px;
  flex-direction: column;
  align-items: center;
  gap: 96px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 64px;
    gap: 32px;
  }

  @media (max-width: ${breakpoints.mobile}) {
  padding: 32px;
  }

`;

const IntroText = styled.p`
font-family: var(--header);
font-size: 28px;
font-weight: 500;
line-height: 48px;
text-align: left;
padding: 40px;
gap: 10px;
border-left: 4px solid var(--blue);

@media (max-width: ${breakpoints.tablet}) {
    padding: 64px;
    gap: 32px;
    font-size: 26px;
    line-height: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
  padding: 16px;
  font-size: 20px;
  line-height: 32px;
  }
`