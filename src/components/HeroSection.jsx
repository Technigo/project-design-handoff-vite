import { Header } from "./Header";
import { FindUsButton } from "./Button";

export const HeroSection = () => {
  return (
    <div className="-z-10 h-[340px] w-screen bg-hero-image bg-cover bg-center md:h-[394px] md:bg-top lg:h-[776px]">
      <div className="-z-5 h-[340px] w-screen bg-dkpurple/50 md:h-[394px] lg:h-[776px]">
        <Header className="-z-1" />
        <div className="lg: flex flex-col items-center justify-center text-center">
          <h1 className="mt-6 text-2xl md:text-[55px] lg:mt-7 lg:text-4xl">
            The Zumba Hall
          </h1>
          <p className="mx-[24px] mb-3 mt-1 md:mb-6 md:mt-2 md:text-base lg:mb-7 lg:mt-5 lg:text-lg">
            Join our training centre and get fit through{" "}
            <span className="italic text-[#F6E53C] md:text-base">Dance</span>
            <span className="italic md:text-base">!</span>
          </p>
          <FindUsButton />
        </div>
      </div>
    </div>
  );
};
