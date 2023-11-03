import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { NewsText } from "../components/reusableComponents/NewsText"
import { NewsPagePictures } from "../components/reusableComponents/NewsPagePictures"
import { SubmitForm } from "../components/reusableComponents/SubmitForm"
import { useTranslation } from "react-i18next"

export const NewsPage = () => {

    const { t } = useTranslation();
    const newsPage = t("newsPage", { returnObjects: true })

    const newsPageText = t(newsPage.text)
    return (

        <div className="min-h-screen relative bg-gradient-to-b from-blue-grey to-grey ">

            <Header />
            <div className="flex flex-col justify-center items-center">
                <NewsText newsText={newsPageText} />
                <SubmitForm />
                <NewsPagePictures />
            </div>
            <Footer />
        </div>
    )
}
