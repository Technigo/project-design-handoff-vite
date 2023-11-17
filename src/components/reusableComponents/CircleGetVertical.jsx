import { useTranslation } from "react-i18next";
import { MiddleSectionGetHeadings } from "./MiddleSectionGetHeadings";

export const CircleGetVertical = () => {
  const { t } = useTranslation();
  const middleSection = t("middleSection", { returnObjects: true });

  const heading = t(middleSection.vertical);

  return (
    <div className="relative z-10">
      <img
        className="rounded-full mt-12 mb-[60px]"
        src="images/circle31.png"
        alt="young man hanging horizontally with feet hanging on pole"
      />
      <MiddleSectionGetHeadings
        middleSectionGetHeading={heading}
        style={"bottom-[20%] right-[34%]"}
      />
    </div>
  );
};
