
import { Navbar } from "../components/Navbar/Navbar"
import { MainCont } from "../components/MainCont/MainCont"
import { InfoFooter } from "../components/Footer/InfoFooter"
//import { Footer } from "../components/Footer/Footer"
import { LottieAni } from "../components/LottieAni"
import { LottieAdv } from "../components/LottieAdv"
import { Translation } from "../components/Translation"

export const LandingP = () => {
    return (
        <>
            <Navbar />
            <MainCont />
            <InfoFooter />
            <Translation />

            <LottieAni />
            <LottieAdv />
        </>
    )
}

//<Footer />
