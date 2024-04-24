import styled from "styled-components";

const ActivitiesSection = styled.section`
  padding: 40px;
  background: white;
`;

const Activity = styled.div`
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

export function RetreatActivities() {
  const activities = [
    {
      name: "Yoga",
      description: "Relaxing and rejuvenating.",
      image: "yoga.jpg",
    },
    {
      name: "Meditation",
      description: "Find your inner peace.",
      image: "meditation.jpg",
    },
    {
      name: "Nature Walks",
      description: "Explore the beauty of nature.",
      image: "walk.jpg",
    },
  ];

  return (
    <ActivitiesSection>
      {activities.map((activity, index) => (
        <Activity key={index}>
          <ActivityImage
            src={`path/to/${activity.image}`}
            alt={activity.name}
          />
          <ActivityName>{activity.name}</ActivityName>
          <ActivityDescription>{activity.description}</ActivityDescription>
        </Activity>
      ))}
    </ActivitiesSection>
  );
}
