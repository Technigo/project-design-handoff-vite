import { LogoDark } from "../components/Logo";
import { Social } from "../components/Social";

export const Footer = () => {
  return (
    <>
      <div className=" h-[248px] w-auto bg-yellow text-black md:h-[331px] lg:h-[756px]">
        <div className="px-2 pb-[30px] pt-[90px]">
          <LogoDark />
          <Social />
        </div>
      </div>
    </>
  );
};
