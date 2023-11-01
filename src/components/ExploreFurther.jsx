import { ClassesPictures } from "./reusable components/ClassesPictures"
import { HeadingBottom } from "./reusable components/HeadingBottom"
import { NewsPictures } from "./reusable components/NewsPictures"

export const ExploreFurther = () => {

    const classesTitle = "discover our classes";
    const newsTitle = "sign up for our latest news";

    return (
        <>
            <HeadingBottom bottomPageHeading={classesTitle.toUpperCase()} />
            <ClassesPictures />
            <HeadingBottom bottomPageHeading={newsTitle.toUpperCase()} />
            <NewsPictures />
        </>

    )
}
