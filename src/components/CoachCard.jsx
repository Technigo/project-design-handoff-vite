export const CoachCard = ({ coach }) => {
  return (
    <div>
      <img src={coach.imageUrl} alt={coach.altText} />
      <h2>{coach.name}</h2>
      <h3>{coach.topics}</h3>
      <p>{coach.text}</p>
    </div>
  );
};
