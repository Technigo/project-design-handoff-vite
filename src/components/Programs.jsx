import seeMore from "/button-see-more.svg";

export const Programs = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-medium font-zilla font-text-center text-2xl text-darkBlue">
          Våra program
        </h2>
        <p className="text-center font-inter text-base text-darkBlue">
          På Studio Mama arbetar både PT och Fysioterapeuter för att hjälpa dig
          finna den rätta träningen där du är just nu.
        </p>
      </div>

      <div className="training-card">
        <div>
          <h3>Mama Trimester 1</h3>
          <p>Träningspass utformade efter graviditetens första trimester. </p>
          <p>
            En blandning av Yoga, rörlighet och styrketräning. För oss är det
            viktigt att anpassa träningen efter din kropps behov så därför går
            detta program att ändra utefter vad just du behöver!
          </p>
          <button>Läs mer</button>
        </div>
      </div>
      <div className="training-card">
        <h3>Mama Trimester 2</h3>
        <p>Träningspass utformade efter graviditetens andra trimester. </p>
        <p>
          En blandning av Yoga, rörlighet och styrketräning. Vi fokusar på
          träning av de djupa magmusklerna samt bäckenbotten.
        </p>
        <button>Läs mer</button>
      </div>

      <div className="flex justify-end">
        <button className="inline-flex gap-4 items-center py-4 ">
          <span className="text-darkBlue text-lg font-medium font-inter">
            Alla program
          </span>
          <img src={seeMore} alt="alla program-knapp" />
        </button>
      </div>
    </section>
  );
};
