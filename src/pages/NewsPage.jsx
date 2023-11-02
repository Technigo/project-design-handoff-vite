import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { NewsText } from "../components/reusable components/NewsText"
import { NewsPagePictures } from "../components/reusable components/NewsPagePictures"
import { SubmitForm } from "../components/reusable components/SubmitForm"

export const NewsPage = () => {

    const newsPageText = "Keep yourself updated with our latest news, workshops, happenings, offers and plenty more by signing up for our Newsletter!"
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
