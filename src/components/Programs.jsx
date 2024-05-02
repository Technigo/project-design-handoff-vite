import {  BtnProgram, BtnReadMore } from "./Buttons";


export const Programs = () => {

  return (
    <section className="relative flex flex-col justify-center items-center m-auto pt-8 p-28 md:px-0 2xl:max-w-7xl">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h2 className="font-medium font-zilla font-text-center text-2xl text-darkBlue 2xl:text-4xl">
          Våra program
        </h2>
        <p className="text-center font-inter text-base text-darkBlue  md:max-w-w750">
          På Studio Mama arbetar både PT och Fysioterapeuter för att hjälpa dig
          finna den rätta träningen där du är just nu.
        </p>
      </div>
      {/*Studio Mama programs here👇*/}
      <div className="flex flex-col flex-wrap md:flex-row gap-8 items-center px-14 md:px-4 py-4">
          <div className="p-10 flex flex-col w-310 justify-between text-left  bg-darkBlue md:h-h400 2xl:h-h550 text-whiteText rounded-lg 2xl:w-380">
            <h3 className="text-2xl 2xl:text-4xl ">Mama Trimester 1</h3>
            <p className="text-peach font-inter mb-5 2xl:mb-10 text-sm 2xl:text-lg">Träningspass utformade efter graviditetens första trimester.</p>
            <p className="font-inter mb-5 2xl:mb-20  text-sm 2xl:text-lg">En blandning av Yoga, rörlighet och styrketräning. För oss är det viktigt att anpassa träningen efter din kropps behov så därför går detta program att ändra utefter vad just du behöver!</p>
            <BtnReadMore />
          </div>
          <div className="p-10 flex flex-col w-310 justify-between text-left  bg-darkBlue md:h-h400 2xl:h-h550 text-whiteText rounded-lg 2xl:w-380">
            <h3 className="text-2xl 2xl:text-4xl ">Mama Trimester 2</h3>
            <p className="text-peach font-inter mb-5 2xl:mb-10 text-sm 2xl:text-lg">Träningspass utformade efter graviditetens andra trimester.</p>
            <p className="font-inter mb-5 2xl:mb-20  text-sm 2xl:text-lg">En blandning av Yoga, rörlighet och styrketräning. Vi fokusar på träning av de djupa magmusklerna samt bäckenbotten.</p>
            <BtnReadMore />
          </div>
          <div className=" hidden 2xl:flex p-10 2xl:flex-col w-310 justify-between text-left  bg-darkBlue md:h-h400 2xl:h-h550 text-whiteText rounded-lg 2xl:w-380">
            <h3 className="text-2xl 2xl:text-4xl ">Mama Recovery</h3>
            <p className="text-peach font-inter mb-5 2xl:mb-10 text-sm 2xl:text-lg">Träningspass utformade efter den första period efter en graviditet.</p>
            <p className="font-inter mb-5 2xl:mb-20  text-sm 2xl:text-lg">Återhämtning är nyckelordet. Du lägger ribban för vad din kropp behöver och klarar av. Olika enkla Aktiverings övningar av magmusklerna och bäckenbotten.</p>
            <BtnReadMore />
          </div>
      </div>
      <BtnProgram />
    </section>
  );
};

