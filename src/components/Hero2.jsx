import yoga2 from "/images/yoga2.png";

export const Hero2 = () => {
  return (
    <header className="px-4 py-8 flex flex-col justify-center">
      <div className="text-[28px] [word-spacing:5px] tracking-wider mb-6 md:text-[40px] md:ml-8 lg:text-[70px] lg:z-10">
        <h1 className="font-bold flex items-start">First things first</h1>
        <h1 className="font-bold flex flex-row justify-end items-end md:items-start md:justify-center">
          <span className="font-light mr-2">The founder:</span>
          Nathalie
        </h1>
      </div>
      <div className="md:flex md:flex-row-reverse md:gap-[2rem] lg:gap-[2rem]">
        <img
          src={yoga2}
          alt="yoga image"
          className="md:w-[28rem] md:mr-5 lg:w-[50rem] lg:z-0  lg:mt-[-8rem]"
        />
        <p className="text-base leading-7 md:w-[17rem] md:text-xl lg:text-[26px] lg:w-[30rem] lg:leading-[3rem] lg:ml-4">
          <strong className="text-xl lg:text-[28px] lg:leading-[4rem]">
            The story
          </strong>
          <br />
          In 2020, <strong>Nathalie</strong> embarked on a new journey, founding
          Hundred Pilates, <br />
          an innovative online app that would bring the essence of Pilates to
          the digital age.
          <br />
          <br /> With <strong>Hundred Pilates</strong>, she aimed to break down
          the barriers of time and place, making Pilates accessible to anyone,
          anywhere. <br /> <br />
          Today, it’s not just an app; it's a movement.
          <strong>Nathalie’s</strong> vision and dedication to wellness has
          helped countless individuals find balance, strength, and serenity in
          the chaos of modern life.
        </p>
      </div>
    </header>
  );
};
