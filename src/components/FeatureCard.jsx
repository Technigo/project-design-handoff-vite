import arrow from "../assets/icons/Forward.svg"

export const FeatureCard = ({ feature }) => {
  console.log(feature);
    let img = "";
    
    const reducedContentCheck = false;

    if ( feature.smallTitle === true ){
        reducedContentCheck = true;
    }

  switch (feature.title) {
    case "Work-Life Balance":
    case "ワークライフバランス":
      img = "src/assets/images/meditation.png";
      break;
    case "Get the job done":
      img = "src/assets/images/distance-working.png";
      break;
    case "Supportive Community":
      img = "src/assets/images/drinking-coffee.png";
      break;
  }

  return (
    <div className="border border-black bg-background-neon-green rounded-lg drop-shadow-card m-4 flex">
      <img className="w-20 h-20 self-center" src={img} />
          <div className="p-4">
              {reducedContentCheck ? <h3 className="phone">{feature.smallTitle} </h3> : <h3 className="tablet">{feature.title}</h3>}


        <p>{feature.description}</p>
          </div>
          <img className="h-6 self-center" src={arrow} />
    </div>
  );
};
