import buttonData from "./Buttons.json";
import { Buttons } from "./Buttons";


// Image data mapping card names to image imports
const heroImagesData = {
  "Personal Training": "/hero01.png",
  "Our Space": "/hero02.png",
  "Over 30 Classes": "/hero03.png",
};

export const HeroCard = ({ cardName }) => {
  const topThreeButtons = buttonData.slice(1, 4);

  // Find the correct image for the given card name
  const image = heroImagesData[cardName];

  return (
    <div>
      <img src={image} alt={cardName} />
      <Buttons buttonList={topThreeButtons} />
    </div>
  );
};