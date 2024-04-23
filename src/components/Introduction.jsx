import shakeHands from "/icon-hand-shake.svg";
import bareWells from "/icon-barewells.svg";
import adultChild from "/icon-adult-child.svg";
import seeMore from "/button-see-more.svg";

export const Introduction = () => {
  return (
    <section className="introduction">
      <div className="hey-mama">
        <h2>Hey Mama!</h2>
        <p>
          Vi vet hur viktigt det är att lyssna på sin kropp, därför finns vi här
          för att skräddarsy just din träningsupplevelse. Det är du som sätter
          agendan och fokuset för din träning. Delta i ett sammanhang där du kan
          möta andra samma skeenden i livet eller låt det fungera som din egna
          personliga oas där du värnar om din fysiska och psykiska hälsa.{" "}
        </p>
      </div>
      <div className="icon-group">
        <img src={shakeHands} alt="shake hands-icon" />
        <p>Få experthjälp av våra Fysioterapeuter och personliga tränare.</p>
      </div>
      <div className="icon-group">
        <img src={bareWells} alt="barewells-icon" />
        <p>
          Över 30 olika program anpassade efter dig och dina behov.Skräddarsy
          din upplevelse.
        </p>
      </div>
      <div className="icon-group">
        <img src={adultChild} alt="adult child-icon" />
        <p>
          Ditt barn är alltid välkommet! Vi erbjuder även barnvärdar som tar
          hand om ditt barn.
        </p>
      </div>
      <div>
        <button>
          <span>Läs mer</span>
          <img src={seeMore} alt="läs mer-knapp" />
        </button>
      </div>
    </section>
  );
};
