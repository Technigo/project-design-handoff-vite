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
      <CardList>
        {activities.map((activity, index) => (
          <CardActivities
            key={index}
            imageSrc={`/images/${activity.image}`}
            title={activity.name}
            description={activity.description}
          />
        ))}
      </CardList>
      <SeeAllLink>See All Workshops</SeeAllLink>
    </ActivitiesSection>
  );
}

const ActivitiesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--padding-mobile);
  gap: 64px;

  @media (min-width: ${breakpoints.tablet}) {
    padding: var(--padding-tablet);
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: var(--padding-desktop);
    gap: 96px;
  }
`;

const IntroText = styled.h3`
  text-align: left;
  padding: 16px;
  gap: 10px;
  border-left: 4px solid var(--blue);

  @media (min-width: ${breakpoints.tablet}) {
    padding: 40px;
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;


  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 40px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: column;
    justify-content: space-between;
    gap: 96px;
    padding: 0 80px;
  }
`

const SeeAllLink = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  text-decoration-line: underline;
  color: var(--blue);
  line-height: 24px;
  letter-spacing: -0.56px;
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.72px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.8px;
  }
`;
