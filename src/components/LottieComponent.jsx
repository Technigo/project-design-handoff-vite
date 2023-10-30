import Lottie from "lottie-react"
import animation_locsagmr from "../assets/animations/animation_locsagmr.json"

export const LottieComponent = () => {
    const style = {
        height: 300
    }
    return (
        <Lottie animationData={animation_locsagmr} style={style}/>
    )
}