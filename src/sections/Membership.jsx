import { YellowDivider } from "../components/YellowDivider";

export const Membership = () => {
  return (
    <div className="relative">
      <h2 className="mb-[10px] mt-3 text-center text-xl md:mb-2 lg:mb-[52px] lg:mt-7 lg:text-3xl">
        Our memberships
      </h2>
      <div className="z-10 flex justify-center">
        <YellowDivider />
      </div>
      <div className="z-0 flex h-[222px] w-auto justify-center gap-[25px] bg-pink px-[24px] pt-[23px] text-black md:h-[320px] md:gap-[60px] md:px-2 md:pt-[34px] lg:h-[549px] lg:gap-[162px] lg:px-[174px] lg:pb-[180px] lg:pt-[79px]">
        <div className="w-[90px] flex-col text-center md:w-[188px] lg:w-[256px]">
          <h3 className="text-[21px] font-bold leading-none md:text-xl lg:text-[50px] lg:font-bold">
            1000 kr <br />
            <span className="text-[18px] font-medium md:text-[25px] lg:text-[50px]">
              à month
            </span>
          </h3>
          <p className="pt-[5px] text-[14px] leading-tight tracking-wider md:pt-[25px] md:text-base lg:pt-3 lg:text-[30px] lg:font-medium lg:tracking-normal ">
            Train as much as you like - just book your spot and show up!
          </p>
        </div>
        <div className="w-[90px] flex-col text-center md:w-[188px] lg:w-[256px]">
          <h3 className="text-[21px] font-bold leading-none md:text-xl lg:text-[50px] lg:font-bold">
            150 kr <br />
            <span className="text-[18px] font-medium md:text-[25px] lg:text-[50px]">
              drop in
            </span>
          </h3>
          <p className="pt-[5px] text-[14px] leading-tight tracking-wide md:pt-[25px] md:text-base lg:pt-3 lg:text-[30px] lg:font-medium lg:tracking-tight ">
            Last minute spots open 15 min before class starts!
          </p>
        </div>
        <div className="w-[90px] flex-col text-center md:w-[188px] lg:w-[256px]">
          <h3 className="text-[21px] font-bold leading-none md:text-xl lg:text-[50px] lg:font-bold">
            500 kr <br />
            <span className="text-[18px] font-medium md:text-[25px] lg:text-[50px]">
              à month
            </span>
          </h3>
          <p className="pt-[5px] text-[14px] leading-tight tracking-wider md:pt-[25px] md:text-base lg:pt-3 lg:text-[30px] lg:font-medium lg:tracking-normal">
            Choose a class type and train up to 5 times a week!
          </p>
        </div>
      </div>
    </div>
  );
};
