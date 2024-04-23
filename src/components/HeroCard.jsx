import buttonData from "./Buttons.json";
import { Buttons } from "./Buttons";
import { HeroImages } from "./HeroImages";



export const HeroCard = () => {
  const topThreeButtons = buttonData.slice(1, 4);


  return (
    <div>
      <HeroImages />
      <Buttons buttonList={topThreeButtons} />
    </div>
  );
};