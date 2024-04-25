export const Hero = () => {
  return (
    <section className="relative bg-heroMobile bg-no-repeat bg-cover h-h960 flex justify-center items-start md:bg-heroTablets md:bg-right py-20 2xl:bg-heroDesktop">
      <div className=" flex  gap-y-96 items-start flex-col max-w-xs md:py-24 md:max-w-sm mx-auto md:gap-10 2xl:max-w-w850 ">
        <h1 className="font-semibold text-4xl text-center text-darkBlue 2xl:text-6xl ">
          Gravid och Mamma-träning på dina villkor.
        </h1>
        <div className="flex flex-col items-center gap-2 justify-center md:gap-10">
          <h2
            className="backdrop-blur-sm font-zilla font-medium text-darkBlue text-center text-2xl 2xl:text-36"
          >
            Styrketräning, magaktivering eller återhämtning, vad behöver din
            kropp idag?
          </h2>
          <button className="backdrop-blur-sm bg-darkBlue hover:bg-hoverBlue mx-auto font-zilla text-whiteText text-24 px-7 py-2 rounded-lg 2xl:text-36">
            Bli medlem
          </button>
        </div>
      </div>
    </section>
  );
};
