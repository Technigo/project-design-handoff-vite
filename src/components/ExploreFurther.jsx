import { useTranslation } from "react-i18next";
import { ClassesPictures } from "./reusableComponents/ClassesPictures";
import { HeadingBottom } from "./reusableComponents/HeadingBottom";
import { NewsPictures } from "./reusableComponents/NewsPictures";

export const ExploreFurther = () => {
  const { t } = useTranslation();
  const explore = t("explore", { returnObjects: true });

  const classesTitle = t(explore.discover);
  const newsTitle = t(explore.signUp);

  return (
    <div className="w-full">
      <HeadingBottom bottomPageHeading={classesTitle.toUpperCase()} />
      <ClassesPictures />
      <HeadingBottom bottomPageHeading={newsTitle.toUpperCase()} />
      <NewsPictures />
    </div>
  );
};
