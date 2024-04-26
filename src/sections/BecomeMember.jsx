import { JoinUsButton } from "../components/Button";

export const BecomeMember = () => {
  return (
    <div className="relative flex justify-center">
      <div className="absolute bottom-[-38px] z-10 h-[254px] w-[312px] justify-center rounded-[5px] bg-purple md:bottom-[-60px] md:h-[431px] md:w-[502px] lg:bottom-[-100px] lg:h-[823px] lg:w-[1016px]">
        <div className="flex flex-col justify-center pt-[50px] text-center md:pt-[115px] lg:pt-[249px] ">
          <h2 className="text-[21px] font-bold leading-none md:text-2xl lg:text-4xl">
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
    </div>
  );
};
