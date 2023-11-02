import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { FrequentlyAskedQuestions } from "../components/reusable components/FrequentlyAskedQuestions"
import { GoogleMaps } from "../components/reusable components/GoogleMaps"
import { OpeningHours } from "../components/reusable components/OpeningHours"

export const InfoPage = () => {
    return (
        <div>
            <div className="min-h-screen relative bg-gradient-to-b from-blue-grey to-grey">
                <Header />
                <OpeningHours />
                <GoogleMaps />
                <FrequentlyAskedQuestions />
                <Footer />
            </div>
        </div>
    )
}
