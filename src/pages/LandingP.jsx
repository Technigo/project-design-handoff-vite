
import { Navbar } from "../components/Navbar/Navbar"
import { MainCont } from "../components/MainCont/MainCont"
//import { Footer } from "../components/Footer/Footer"
import { LottieAni } from "../components/LottieAni"
import { LottieAdv } from "../components/LottieAdv"
import { Translation } from "../components/Translation"

export const LandingP = () => {
    return (
        <>
            <Navbar />
            <MainCont />
            <Translation />

            <LottieAni />
            <LottieAdv />
        </>
    )
}

//<Footer />
