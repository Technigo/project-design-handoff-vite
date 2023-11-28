import { useTranslation } from "react-i18next";
export const Button = () => {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      className="w-[210px] h-[40px] mb-2 text-base text-half-yellow border-persian-blue rounded-[30px] bg-persian-blue  font-bold z-10 md:w-[260px] md:h-[48px] md:text-[20px] lg:w-[320px] lg:h-[62px] lg:text-[26px] hover:text-persian-blue hover:bg-half-yellow hover:underline"
    >
      {t("button")}
    </button>
  );
};
