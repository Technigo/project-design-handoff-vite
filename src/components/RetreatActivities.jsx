import styled from "styled-components";

import { activities } from "../utility/ActivityData";
import { breakpoints } from "../utility/breakpoints";
import { CardActivities } from "../utility/CardActivities";

export function RetreatActivities() {
  const introText =
    "Book your stay and dive into practical workshops and activities that go beyond the clichés, offering tangible ways to reshape habits and enrich your daily experience. Customize your stay, choose your adventures, and embrace a journey that's grounded in reality, accessible to everyone seeking a more fulfilling life.";

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
      <SeeAllLink>See All Workshops</SeeAllLink>
    </ActivitiesSection>
  );
}

const ActivitiesSection = styled.section`
  display: flex;
  padding: 64px 32px;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 64px;
    gap: 32px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 96px 128px;
    gap: 96px;
  }
`;

const IntroText = styled.p`
  font-family: var(--header);
  font-size: 280x;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
  padding: 16px;
  gap: 64px;
  border-left: 4px solid var(--blue);

  @media (min-width: ${breakpoints.tablet}) {
    padding: 40px;
    font-size: 26px;
    font-weight: 500;
    line-height: 40px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 28px;
    line-height: 48px;
  }
`;
const SeeAllLink = styled.span`
  font-family: var(--paragraph);
  font-size: 20px;
  text-decoration-line: underline;
  color: var(--blue);
  line-height: 24px;
  letter-spacing: -0.8px;
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
