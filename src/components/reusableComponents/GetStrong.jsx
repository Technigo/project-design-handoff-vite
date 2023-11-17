import { MiddleSectionGetHeadings } from "./MiddleSectionGetHeadings";
import { useTranslation } from "react-i18next";

export const GetStrong = () => {
  const { t } = useTranslation();
  const middleSection = t("middleSection", { returnObjects: true });

  const heading = t(middleSection.strong);
  return (
    <div className="relative z-10">
      <MiddleSectionGetHeadings
        middleSectionGetHeading={heading}
        style={"right-[38%] top-[40%] lg:right-16 lg:top-56"}
      />
      <img
        className="w-screen mt-16  z-5"
        src="images/polePoel.png"
        alt="a man with a hoodie hanging from a pole horizontally with the help of his hands"
      />
    </div>
  );
};
