import { JoinUsButton } from "../components/Button";

export const BecomeMember = () => {
  return (
    <div className="relative z-10 mx-[24px] h-[254px] justify-center rounded-[5px] bg-purple md:h-[431px] md:w-[502px] lg:h-[823px] lg:w-[1016px]">
      <div className="flex flex-col justify-center pt-[50px] text-center md:pt-[115px] lg:pt-[249px] ">
        <h2 className="text-[21px] font-bold md:text-2xl lg:text-4xl">
          Become a member!
        </h2>
        <p className="pt-[10px] text-[18px] font-medium md:text-[25px] lg:text-3xl">
          Join The Zumba Hall today!
        </p>
      </div>
      <div className="flex justify-center pt-[35px] md:pt-[53px] lg:pt-[120px]">
        <JoinUsButton />
      </div>
    </div>
  );
};
