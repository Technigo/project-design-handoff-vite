import { Hero } from "../sections/Hero"
import { SellingPoints } from "../sections/SellingPoints"

export const HomePage = () => {
    return (
        <>
            {/* <div className="the-page"> */}
            <Hero />
            <SellingPoints />
            <p>HOME PAGE</p>
            {/* </div> */}
        </>
    )
}