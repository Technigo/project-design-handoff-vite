//Mounted in App.jsx. About page with reusable components.

//Imports
import { Navbar } from "../components/Navbar/Navbar"
import { AboutMain } from "../components/AboutMain"
import { MoodMusic } from "../components/MoodMusic"
import { InfoFooter } from "../components/Footer/InfoFooter"
import { Translation } from "../translations/Translation"
import { Footer } from "../components/Footer/Footer"

//Export with components mounted.
export const AboutP = () => {
    return (
        <>
            <Navbar />
            <AboutMain />
            <MoodMusic />
            <InfoFooter />
            <Translation />
            <Footer />
        </>
    )
}
