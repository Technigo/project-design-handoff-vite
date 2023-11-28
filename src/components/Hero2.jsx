import yoga2 from "/images/yoga2.png";
import { useTranslation } from "react-i18next";

export const Hero2 = () => {
  const { t } = useTranslation();
  return (
    <header className="px-4 py-8 flex flex-col justify-center">
      <div className="text-[28px] [word-spacing:5px] tracking-wider mb-6 md:text-[40px] md:ml-8 lg:text-[70px] lg:z-10">
        <h1 className="font-bold flex items-start">{t("hero2.h1.0")}</h1>
        <h1 className="font-bold flex flex-row justify-end items-end md:items-start md:justify-center">
          <span className="font-light mr-2">{t("hero2.h1.1")}</span>
          {t("hero2.h1.2")}
        </h1>
      </div>
      <div className="md:flex md:flex-row-reverse md:gap-[2rem] lg:gap-[2rem]">
        <img
          src={yoga2}
          alt="yoga image"
          className="md:w-[28rem] md:mr-5 lg:w-[50rem] lg:z-0  lg:mt-[-8rem]"
        />
        <p className="text-base leading-7 md:w-[17rem] md:text-xl lg:text-[26px] lg:w-[30rem] lg:leading-[3rem] lg:ml-4">
          <strong className="text-xl lg:text-[28px] lg:leading-[4rem]">
            {t("hero2.p.0")}
          </strong>
          <br />
          {t("hero2.p.1")} <strong>{t("hero2.p.2")}</strong> {t("hero2.p.3")}
          <br />
          {t("hero2.p.4")}
          <br />
          <br /> {t("hero2.p.5")} <strong>{t("hero2.p.6")}</strong>,{" "}
          {t("hero2.p.7")} <br /> <br />
          {t("hero2.p.8")}
          <strong>{t("hero2.p.9")}</strong> {t("hero2.p.10")}
        </p>
      </div>
    </header>
  );
};
