import { Divider } from "../components/Divider";

export const Statistics = () => {
  return (
    <>
      <div className="mb-3 mt-1 flex justify-center gap-2 px-1 text-center md:mb-6 md:mt-2 md:gap-1 lg:mb-[64px] lg:mt-5 lg:gap-[118px]">
        <div className="h-auto w-[82px] md:w-[158px] lg:w-[189px]">
          <h2 className="flex flex-col text-xl leading-none text-yellow md:text-[45px] lg:text-[70px]">
            20
            <span className="md mt-1 text-sm text-white md:text-[30px] md:leading-8">
              Certified instructors
            </span>
          </h2>
        </div>
        <div className="h-auto w-[82px] md:w-[158px] lg:w-[189px]">
          <h2 className="flex flex-col text-xl leading-none text-yellow md:text-[45px] lg:text-[70px]">
            20
            <span className=" mt-1 text-sm text-white md:text-[30px] md:leading-8">
              Different classes
            </span>
          </h2>
        </div>
        <div className="h-auto w-[82px] md:w-[158px] lg:w-[189px]">
          <h2 className="flex flex-col text-xl leading-none text-yellow md:text-[45px] lg:text-[70px]">
            1
            <span className=" mt-1 text-sm text-white md:text-[30px] md:leading-8">
              Fee – join all classes
            </span>
          </h2>
        </div>
      </div>
      <div>
        <Divider />
      </div>
    </>
  );
};
