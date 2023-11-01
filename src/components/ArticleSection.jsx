import { SubHeadingArticle } from "./reusable components/SubHeadingArticle"
import { Buttons } from "./reusable components/buttons"

export const ArticleSection = () => {

    return (
        <div className="mx-4 flex flex-col justify-center items-center">
            <Buttons />
            <SubHeadingArticle />
        </div>
    )
}
