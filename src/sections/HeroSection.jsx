import { Header } from "../components/Header";
import { FindUsButton } from "../components/Button";

export const HeroSection = () => {
  return (
    <div className=" -z-10 h-[340px] w-screen bg-hero-image bg-cover bg-center md:h-[394px] lg:h-[776px]">
      <div className="-z-5 h-[340px] w-screen bg-dkpurple/50 md:h-[394px] lg:h-[776px]">
        <Header className="-z-1" />
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mt-6 text-2xl md:text-4xl lg:mt-7 lg:text-[70px]">
            The Zumba Hall
          </h1>
          <p className="mx-[24px] mb-3 mt-[8px] md:mb-6 md:text-base lg:mb-7 lg:mt-1 lg:text-3xl">
            Join our training centre and get fit through{" "}
            <span className="italic text-[#F6E53C] md:text-base lg:text-3xl">
              Dance
            </span>
            <span className="italic md:text-base lg:text-3xl">!</span>
          </p>
          <FindUsButton />
        </div>
      </div>
    </div>
  );
};
