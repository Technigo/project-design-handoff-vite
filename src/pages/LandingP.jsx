//Landing page/home page, mounted in App.jsx.

//Imports
import { Navbar } from "../components/Navbar/Navbar"
import { MainCont } from "../components/MainCont/MainCont"
import { InfoFooter } from "../components/Footer/InfoFooter"
import { Footer } from "../components/Footer/Footer"
import { Translation } from "../translations/Translation"
import { MoodMusic } from "../components/MoodMusic"

//Export with components mounted.
export const LandingP = () => {
    return (
        <>
            <Navbar />
            <MainCont />
            <MoodMusic />
            <InfoFooter />
            <Translation />
            <Footer />
        </>
    )
}


// This is not used but was used in practise. Keeping for learning purpose.
//import { LottieAni } from "../components/LottieAni"
//import { LottieAdv } from "../components/LottieAdv"

//<LottieAni />
  //<LottieAdv />
