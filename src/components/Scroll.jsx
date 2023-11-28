import data from "../translations/en.json";
import { useTranslation } from "react-i18next";

export const Scroll1 = () => {
  const { t } = useTranslation();

  return (
    <section className=" border-[6px]  border-y-lime-green border-x-0 overflow-hidden">
      <p className="w-full h-16 text-[22px] font-bold tracking-widest whitespace-nowrap  flex flex-row items-center  animate-scroll [word-spacing:16px]">
        {t("tags1.0")}
        {t("tags1.1")}
        {t("tags1.2")}
        {t("tags1.3")}
        {t("tags1.4")}
        {t("tags1.5")}
        {t("tags1.6")}
      </p>
    </section>
  );
};

export const Scroll2 = () => {
  const { t } = useTranslation();
  // const tags2 = data.tags2;
  // const firstWord2 = tags2[0];
  // const remainingWords2 = tags2.slice(1).join(" • ");
  return (
    <section className=" border-[6px]  border-y-lime-green border-x-0 mt-10 lg:mt-0 overflow-hidden">
      <p className="w-full h-16 text-[22px] font-bold tracking-widest whitespace-nowrap  flex flex-row items-center  animate-scroll scroll-auto [word-spacing:16px] ">
        {t("tags2.0")}
        {t("tags2.1")}
        {t("tags2.2")}
        {t("tags2.3")}
        {t("tags2.4")}
        {t("tags2.5")}
        {t("tags2.6")}
      </p>
    </section>
  );
};
