import { useTranslation } from "react-i18next"
import { HeadingArticle } from "./reusableComponents/HeadingArticle"
import { SubHeadingArticle } from "./reusableComponents/SubHeadingArticle"
import { Buttons } from "./reusableComponents/Buttons"

export const ArticleSection = () => {

    const { t } = useTranslation();
    const article = t("article", { returnObjects: true })

    const heading = t(article.welcome);
    const subHeading = t(article.join);

    return (
        <div className="mx-4 flex flex-col justify-center items-center">
            <HeadingArticle articleHeading={heading} />
            <div className="flex flex-col md:flex-row-reverse">
                <Buttons />
                <SubHeadingArticle articleSubHeading={subHeading} />

            </div>

        </div>
    )
}
