import { useTransition } from "react";
import { Button } from "./Button";
import hero from "/images/hero.png";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  const content = {
    heading: t("hero.heading"),
    span: t("hero.span"),
    br: t("hero.br"),
    subHeading: t("hero.sub-heading"),
  };

  return (
    <section className=" w-full relative flex flex-col items-start justify-center">
      <img
        src={hero}
        alt="hero image"
        className="w-full h-[50vh] object-cover bg-lightgray bg-no-repeat bg-center md:h-[62vh] lg:h-[100vh] "
      />
      <div className=" w-[95%] h-[95%] absolute top-3 left-3 z-10 text-primary flex flex-col justify-center gap-3 md:ml-4  lg:gap-6 lg:ml-4">
        <h1 className="text-[26px] font-bold md:text-[40px] lg:text-[70px] z-1">
          {content.heading} <br />
          <span>{content.span}</span> <br />
          {content.br}
        </h1>
        <p className="text-[16px] w-[90%] font-[600] leading-[22px]  md:text-[22px] md:w-[60%] md:leading-10 lg:text-[30px] lg:leading-[49px] z-10  lg:my-0">
          {content.subHeading}
        </p>
        <Button />
      </div>
    </section>
  );
};
