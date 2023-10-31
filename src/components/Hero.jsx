import { Button } from "./Button";
import hero from "/images/hero.png";
export const Hero = () => {
  return (
    <section className="border-2 border-solid border-red-600 w-full relative flex flex-col items-start   justify-center">
      <img
        src={hero}
        alt="hero image"
        className="w-full h-[50vh] object-cover bg-lightgray bg-no-repeat bg-center md:h-[62vh] lg:h-[100vh] "
      />
      <div className=" border-2 border-solid  border-green-600 w-[95%] h-[95%] absolute top-3 left-3 z-10 text-primary flex flex-col justify-center gap-3 md:ml-4  lg:gap-6 lg:ml-4">
        <h1 className="text-[26px] font-bold md:text-[40px] lg:text-[70px] z-1">
          Master the <br />
          <span>Pilates</span> <br />
          fundamentals
        </h1>
        <p className="text-[16px] w-[90%] font-[600] leading-[28px] mt-4 md:text-[22px] md:w-[60%] md:leading-10 lg:text-[32px] lg:leading-[49px] z-10">
          Sculpt, sweat and flow it out on the mat with the help of 100+ online
          classes. Available whenever you want.
        </p>
        <Button />
      </div>
    </section>
  );
};
