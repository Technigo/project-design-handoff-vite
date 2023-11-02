
import { Navbar } from "../components/Navbar/Navbar"
import { MainCont } from "../components/MainCont/MainCont"
import { InfoFooter } from "../components/Footer/InfoFooter"
import { Footer } from "../components/Footer/Footer"
import { Translation } from "../translations/Translation"


export const LandingP = () => {
    return (
        <>
            <Navbar />
            <MainCont />
            <InfoFooter />
            <Translation />
            <Footer />

        </>
    )
}


// This is not used but was used in practise
//import { LottieAni } from "../components/LottieAni"
//import { LottieAdv } from "../components/LottieAdv"

//<LottieAni />
  //<LottieAdv />
