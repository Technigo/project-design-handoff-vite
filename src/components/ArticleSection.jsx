import { HeadingArticle } from "./reusable components/HeadingArticle"
import { SubHeadingArticle } from "./reusable components/SubHeadingArticle"
import { Buttons } from "./reusable components/buttons"

export const ArticleSection = () => {
    const heading = "Welcome to Nordic Pole Academy"
    const subHeading = "Join our stockholm based pole community to unlock your potential no matter what your amibition!"
    return (
        <div className="mx-4 flex flex-col justify-center items-center">
            <HeadingArticle articleHeading={heading} />
            <Buttons />
            <SubHeadingArticle articleSubHeading={subHeading} />
        </div>
    )
}
