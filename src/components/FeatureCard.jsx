import arrow from "../assets/icons/Forward.svg";
import meditation from "../assets/images/meditation.png";
import distanceWorking from "../assets/images/distance-working.png";
import drinkingCoffee from "../assets/images/drinking-coffee.png";

export const FeatureCard = ({ feature }) => {
  let img = "";

  switch (feature.title) {
    case "Work-Life Balance":
    case "ワークライフバランス":
      img = meditation;
      break;
    case "Get the job done":
    case "目標達成の場":
      img = distanceWorking;
      break;
    case "Supportive Community":
    case "充実のコミュニティ":
      img = drinkingCoffee;
      break;
  }

  return (
    <div className="border border-black desktop:border-none desktop:drop-shadow-none bg-background-neon-green rounded-lg drop-shadow-card mx-4 my-12 tablet:my-18 tablet:mx-6 flex">
      <img
        className="w-[100px] tablet:w-[120px] desktop:w-[160px] self-center ml-2 tablet:ml-4"
        src={img}
      />
      <div className="p-4">
        <h3 className="block text-lg tablet:hidden">{feature.smallTitle}</h3>
        <h3 className="hidden text-lg desktop:text-xl tablet:block">
          {feature.title}
        </h3>
        <p className="text-sm block tablet:hidden">
          {feature.smallDescription}
        </p>
        <p className="hidden tablet:block text-xl">{feature.description}</p>
      </div>
      <img className="h-6 mr-4 self-center" src={arrow} />
    </div>
  );
};
