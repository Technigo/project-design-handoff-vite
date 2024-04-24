import styled from "styled-components";
import { CardActivities } from "../utility/CardActivities";
import { activities } from "../utility/ActivityData";

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
          /*  buttonLabel="Learn More" */
          buttonOnClick={() => console.log(`Joined ${activity.name}`)}
        />
      ))}
    </ActivitiesSection>
  );
}


const ActivitiesSection = styled.section`
  padding: 96px 128px;
  flex-direction: column;
  align-items: flex-end;
  gap: 96px;
  align-self: stretch;
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
`

/* const Activity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ActivityImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ActivityName = styled.h3`
  margin: 10px 0;
`;

const ActivityDescription = styled.p`
  text-align: center;
`;

 */