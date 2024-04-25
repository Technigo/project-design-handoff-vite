import { YellowDivider } from "./YellowDivider";

export const Membership = () => {
  return (
    <div className="relative">
      <h2 className="mb-[10px] mt-3 text-center text-xl">Our memberships</h2>
      <div className="z-10 flex justify-center">
        <YellowDivider />
      </div>
      <div className="relative z-0 flex h-[222px] w-auto justify-center gap-[25px] bg-pink px-[24px] pb-[70px] pt-[23px] text-black">
        <div className="w-[90px] flex-col text-center">
          <h3 className="text-[21px] font-bold leading-none">
            1000 kr <br />
            <span className="text-[18px] font-medium">à month</span>
          </h3>
          <p className="racking-wide pt-[5px] text-[14px] leading-tight">
            Train as much as you like - just book your spot and show up!
          </p>
        </div>
        <div className="w-[90px] flex-col text-center">
          <h3 className="text-[21px] font-bold leading-none">
            150 kr <br />
            <span className="text-[18px] font-medium">drop in</span>
          </h3>
          <p className="racking-wide pt-[5px] text-[14px] leading-tight">
            Last minute spots open 15 min before class starts!
          </p>
        </div>
        <div className="w-[90px] flex-col text-center">
          <h3 className="text-[21px] font-bold leading-none">
            500 kr <br />
            <span className="text-[18px] font-medium">à month</span>
          </h3>
          <p className="pt-[5px] text-[14px] leading-tight tracking-wide">
            Choose a class type and train up to 5 times a week!
          </p>
        </div>
      </div>
    </div>
  );
};
