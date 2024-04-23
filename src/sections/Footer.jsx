import { LogoDark } from "../components/Logo";
import { Social } from "../components/Social";
import { Language } from "../components/Language";

export const Footer = () => {
  return (
    <>
      <section className="h-[248px] w-auto bg-yellow text-black md:h-[331px] lg:h-[756px]">
        <div className="grid px-1 pb-[30px] pt-[90px]">
          <LogoDark />
          <Social />
          <div>Address</div>
          <div className="flex gap-[20px]">
            <p>Copyright notice</p>
            <p>Privacy policy</p>
          </div>
          <Language />
        </div>
      </section>
    </>
  );
};
