//Not mounted or used since there wasn't this kind of animation in the design

import Lottie from "lottie-react"
import bike from "../assets/animations/bike.json"


export const LottieAdv = () => {
    const options = {
        animationData: bike,
        style: {
            height: 300
        }
    }
    return (
        <Lottie animationData={options.animationData} style={options.style} />
    )
}
