import { useTranslation } from "react-i18next";
import { MiddleSectionGetHeadings } from "./MiddleSectionGetHeadings";

export const GetBendy = () => {
  const { t } = useTranslation();
  const middleSection = t("middleSection", { returnObjects: true });

  const heading = t(middleSection.bendy);

  return (
    <div className="relative z-10">
      <MiddleSectionGetHeadings
        middleSectionGetHeading={heading}
        style={"right-[38%] top-[10%] lg:right-16 lg:top-56 "}
      />

      <img
        className="w-screen mt-8 z-12"
        src="images/bendy.jpg"
        alt="woman in leather doing a vertical split with the help of a pole "
      />
    </div>
  );
};
