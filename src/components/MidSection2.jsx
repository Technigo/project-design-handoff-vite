import yoga3 from "/images/yoga3.png";
import { useTranslation } from "react-i18next";
export const MidSection2 = () => {
  const { t } = useTranslation();
  return (
    <section className="px-3 mb-10  md:relative lg:flex lg:justify-end ">
      <div className=" flex justify-center py-3 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="112"
          height="104"
          viewBox="0 0 112 104"
          fill="none"
          className="md:absolute md:right-[50%] md:top-[20%] md:-z-10 lg:w-[250px] lg:h-[222px] lg:right-[58%] lg:top-[%]"
        >
          <ellipse
            cx="56"
            cy="51.6"
            rx="56"
            ry="51.6"
            fill="#D8F59D"
            fill-opacity="0.7"
          />
        </svg>
      </div>
      <div className="py-3 gap-5  flex flex-col lg:w-[60%] lg:mr-20">
        <div className="gap-3 flex flex-row md:flex-row-reverse">
          <div>
            <p className="leading-6 text-base h-[16rem] md:text-xl md:h-[11rem] md:leading-10 md:mt-20 lg:text-[26px]">
              <strong>{t("midsection.p.0")}</strong> {t("midsection.p.1")}
            </p>
            <p className="text-[18px]2 font-bold leading-8 text-justify  md:text-xl  max-sm:hidden max-md:hidden lg:text-[28px] lg:leading-[3rem] lg:mt-10 lg:w-[80%]">
              {t("midsection.p.2")}
            </p>
          </div>
          <img
            src={yoga3}
            alt="yoga images"
            className="w-[12rem] md:w-[19rem] lg:hidden "
          />
        </div>
        <p className="text-[18px]2 font-bold leading-8 text-justify  md:text-xl  md:hidden  ">
          {t("midsection.p.3")}
        </p>
      </div>
    </section>
  );
};
