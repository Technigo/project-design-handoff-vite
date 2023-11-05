//Mounted in App.jsx. About page with reusable components.

//Imports
import { Navbar } from "../components/Navbar/Navbar"
import { AboutHero } from "../components/AboutHero/AboutHero"
import { AboutMain } from "../components/AboutMain"
import { AboutTrainers } from "../components/AboutTrainers/AboutTrainers"
import { MoodMusic } from "../components/MoodMusic"
import { InfoFooter } from "../components/Footer/InfoFooter"
import { Translation } from "../translations/Translation"
import { Footer } from "../components/Footer/Footer"

//Export with components mounted.
export const AboutP = () => {
    return (
        <>
            <Navbar />
            <AboutHero />
            <AboutMain />
            <AboutTrainers />
            <MoodMusic />
            <InfoFooter />
            <Translation />
            <Footer />
        </>
    )
}
