import { BtnIntroduction, BtnProgram } from "./Buttons";


export const Programs = () => {
  // Define an array of program objects
  const programs = [
    {
      title: "Mama Trimester 1",
      description: "Träningspass utformade efter graviditetens första trimester.",
      details:
        "En blandning av Yoga, rörlighet och styrketräning. För oss är det viktigt att anpassa träningen efter din kropps behov så därför går detta program att ändra utefter vad just du behöver!",
    },
    {
      title: "Mama Trimester 2",
      description: "Träningspass utformade efter graviditetens andra trimester.",
      details:
        "En blandning av Yoga, rörlighet och styrketräning. Vi fokusar på träning av de djupa magmusklerna samt bäckenbotten.",
    },
    {
      title: "Mama Recovery",
      description: "Träningspass utformade efter den första period efter en graviditet. ",
      details:
        "Återhämtning är nyckelordet. Du lägger ribban för vad din kropp behöver och klarar av. Olika enkla Aktiverings övningar av magmusklerna och bäckenbotten. ",
    },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center m-auto py-8 md:max-w-lg 2xl:max-w-5xl">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h2 className="font-text-center text-2xl text-darkBlue font-bold">
          Våra program
        </h2>
        <p className="text-center font-inter text-base text-darkBlue">
          På Studio Mama arbetar både PT och Fysioterapeuter för att hjälpa dig
          finna den rätta träningen där du är just nu.
        </p>
      </div>

      <div className="flex flex-col  2xl:flex-row gap-8 items-center px-14 py-20">
        {/* Map over the programs array to render program cards */}
        {programs.map((program, index) => (
          <div key={index} className="p-10 py-10 flex flex-col w-310 justify-between text-left  bg-darkBlue md:h-h400 2xl:h-h550 text-whiteText rounded-lg 2xl:w-96">
            <h3 className="text-2xl 2xl:text-4xl ">{program.title}</h3>
            <p className="text-peach font-inter mb-5 2xl:mb-10 text-sm 2xl:text-lg">{program.description}</p>
            <p className="font-inter mb-5 2xl:mb-20  text-sm 2xl:text-lg">{program.details}</p>
            <button className="text-xl font-inter font-bold bg-white hover:bg-hoverBlue mx-auto text-darkBlue text-24 px-7 py-2 rounded-lg hover:text-white 2xl:text-2xl">
              Läs mer</button>
          </div>
        ))}
      </div>
      <BtnProgram />
    </section>
  );
};

