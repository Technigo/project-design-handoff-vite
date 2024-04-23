const heroImagesData = {
  "Personal Training": "/hero01.png",
  "Our Space": "/hero02.png",
  "Over 30 Classes": "/hero03.png",
};

export const HeroImages = () => {
  return (
    <div>
      {Object.entries(heroImagesData).map(([cardName, imageURL]) => (
        <img key={cardName} src={imageURL} alt={cardName} />
      ))}
    </div>
  );
};
