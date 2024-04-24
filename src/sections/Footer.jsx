import { LogoDark } from "../components/Logo";
import { Social } from "../components/Social";
import { Language } from "../components/Language";
import { Address } from "../components/Address";

export const Footer = () => {
  return (
    <>
      <section className="relative h-[260px] w-auto bg-yellow text-black md:h-[331px] lg:h-[756px]">
        <div className="flex grid-cols-2 flex-wrap place-content-between px-1 pb-[23px] pt-[64px] md:grid md:px-2 md:pb-[30px] md:pt-[90px] lg:px-[112px] lg:pb-[107px] lg:pt-[188px] ">
          <LogoDark />
          <Social />
          <Address />
          <div className="flex self-end">
            <div className="flex gap-[20px] text-[14px]">
              <p>Copyright notice</p>
              <p>Privacy policy</p>
            </div>
            <Language />
          </div>
        </div>
      </section>
    </>
  );
};
