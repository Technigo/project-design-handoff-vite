export const Hero = () => {
  return (
    <section className="backdrop-blur py-20 relative bg-heroMobile bg-no-repeat bg-cover h-h960 flex justify-center items-start md:bg-heroTablets md:bg-right 2xl:bg-heroDesktop">
      {/* <div className="container justify-start text-center md:mx-auto"> */}
      <div className=" flex  items-start flex-col gap-y-64 max-w-xs md:max-w-sm mx-auto md:gap-10 2xl:max-w-w850  md:my-24">
        <h1 className="font-zilla pt-11 self-start font-semibold text-4xl text-center text-darkBlue 2xl:text-6xl ">
          Gravid och Mamma-träning på dina villkor.
        </h1>
        <div className="flex flex-col items-center gap-2 justify-center md:gap-10">
          <h2 className="backdrop-blur-sm font-zilla font-medium text-center text-2xl 2xl:text-36">
            Styrketräning, magaktivering eller återhämtning, vad behöver din
            kropp idag?
          </h2>
          <button className="backdrop-blur-sm bg-darkBlue mx-auto font-zilla text-whiteText text-24 px-7 py-2 rounded-lg 2xl:text-36">
            Bli medlem
          </button>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};
