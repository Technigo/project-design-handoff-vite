export const WorkshopCard = ({ workshop }) => {
  return (
    <div>
      <img src={workshop.imageUrl} alt={workshop.altText} />
      <h1>{workshop.text}</h1>
      <p>{workshop.text}</p>
    </div>
  );
};
