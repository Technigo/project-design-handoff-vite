import arrow from "../assets/icons/Forward.svg";
import meditation from "../assets/images/meditation.png";
import distanceWorking from "../assets/images/distance-working.png";
import drinkingCoffee from "../assets/images/drinking-coffee.png";

export const FeatureCard = ({ feature }) => {
  console.log(feature);
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
    <div className="border border-black bg-background-neon-green rounded-lg drop-shadow-card m-4 flex">
      <img className="w-20 h-20 self-center" src={img} />
      <div className="p-4">
        <h3 className="block tablet:hidden">{feature.smallTitle} </h3>
        <h3 className="hidden tablet:block">{feature.title}</h3>
        <p className="block tablet:hidden">{feature.smallDescription}</p>
        <p className="hidden tablet:block">{feature.description}</p>
      </div>
      <img className="h-6 self-center" src={arrow} />
    </div>
  );
};
