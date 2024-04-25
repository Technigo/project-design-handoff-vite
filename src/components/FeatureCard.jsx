import arrow from "../assets/icons/Forward.svg"
import meditation from "../assets/images/meditation.png";
import distanceWorking from "../assets/images/distance-working.png";
import drinkingCoffee from "../assets/images/drinking-coffee.png";

export const FeatureCard = ({ feature }) => {
  console.log(feature);
    let img = "";
    
    let reducedContentCheck = false;

    if ( feature.smallTitle === true ){
        reducedContentCheck = true;
    }

  switch (feature.title) {
    case "Work-Life Balance":
    case "ワークライフバランス":
      img = meditation;
      break;
    case "Get the job done":
      img = distanceWorking;
      break;
    case "Supportive Community":
      img = drinkingCoffee;
      break;
  }

  return (
    <div className="border border-black bg-background-neon-green rounded-lg drop-shadow-card m-4 flex">
      <img className="w-20 h-20 self-center" src={img} />
          <div className="p-4">
              {reducedContentCheck ? <h3 className="tablet:hidden">{feature.smallTitle} </h3> : <h3 className="hidden tablet:inline">{feature.title}</h3>}


        <p>{feature.description}</p>
          </div>
          <img className="h-6 self-center" src={arrow} />
    </div>
  );
};
