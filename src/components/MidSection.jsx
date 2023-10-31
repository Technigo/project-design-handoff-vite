import iphone from "/images/iPhone.png";
import appStore from "/icons/appleplay.svg";
import googleStore from "/icons/googleplay.svg";

export const MidSection = () => {
  return (
    <section className=" w-full relative  flex flex-col gap-10 lg:flex-row lg:gap-0 lg:h-[100vh]">
      <div className="flex flex-row  z-0  lg:w-[60%]">
        <img
          src={iphone}
          alt="iphone image"
          className="rotate-[-3.8deg] w-[70%] md:w-[60%] "
        />
        <div className="text-[18px] flex flex-col gap-3 z-10 absolute left-[35%] font-normal leading-normal break-normal  md:text-[22px] md:gap-10 md:mt-[6rem]  lg:text-[30px] lg:h-[70%] lg:w-[37%] lg:left-[25%] lg:top-[-30px] lg:gap-[4rem] ">
          <p className=" w-[80%] mt-5  md:w-[50%] md:ml-[2rem] lg:w-[90%] lg:ml-0 lg:mt-[2rem] ">
            Different levels tailored to your needs
          </p>
          <p className=" w-[80%] ml-[2rem] md:w-[50%] md:ml-[4rem] lg:w-[90%]  lg:ml-2  ">
            Low impact sessions ranging from 15-45 minutes
          </p>
          <p className=" w-[80%]  ml-[4rem] md:w-[60%] md:ml-[8rem] lg:w-[90%]   lg:ml-4 ">
            Certified instructors teaching you the fundamentals of Pilates
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center lg:flex-col lg:w-[40%]">
        <div className=" w-[60%] pl-4 md:w-[40%] lg:w-[100%] lg:text-center ">
          <h1 className="text-[28px]  md:text-[40px]  lg:text-[70px]">
            Unlock <strong className="italic">100+</strong> <br />
            <strong className="italic">classes </strong>and <br />
            start{" "}
            <strong className="italic">
              moving <br />
              on the move
            </strong>
          </h1>
        </div>
        <div className="flex flex-col gap-5 w-[40%] items-center lg:flex-row lg:w-full lg:justify-center lg:mt-10">
          <img
            src={appStore}
            alt="App store"
            className="w-[80%] lg:w-[182px]"
          />
          <img
            src={googleStore}
            alt="Google store"
            className="w-[80%] lg:w-[182px]"
          />
        </div>
      </div>
    </section>
  );
};
