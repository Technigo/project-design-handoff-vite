import { LogoDark } from "../components/Logo";
import { Social } from "../components/footerComponents/Social";
import { Language } from "../components/footerComponents/Language";
import { Address } from "../components/footerComponents/Address";
import { Legal } from "../components/footerComponents/Legal";

export const Footer = () => {
  return (
    <>
      <section className="relative h-[260px] w-auto bg-yellow text-black md:h-[339px] lg:h-[756px]">
        <div className="grid grid-cols-2 px-[24px] pb-[23px] pt-[64px] md:px-2 md:pb-[30px] md:pt-[90px] lg:px-[112px] lg:pb-[107px] lg:pt-[188px] ">
          <LogoDark />
          <div className="col-start-2 col-end-3 row-start-1 row-end-3">
            <Social />
          </div>
          <div className="col-start-1 col-end-2 row-start-2 row-end-4">
            <Address />
          </div>
          <div className="col-start-2 col-end-3 row-start-3 row-end-4 mt-[107px] justify-self-end md:row-start-2 md:row-end-3 md:m-[0px] md:self-end">
            <Language />
          </div>
          <div className="col-start-1 col-end-3 row-start-3 row-end-4 mt-[107px] md:col-start-2 md:col-end-3 md:m-[0px] md:self-end md:justify-self-end md:text-right">
            <Legal />
          </div>
        </div>
      </section>
    </>
  );
};
