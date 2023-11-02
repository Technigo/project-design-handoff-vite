import { Hero } from "../sections/Hero"
import { SellingPoints } from "../sections/SellingPoints"
import { Testimonials } from "../sections/Testimonials"
import { MiniFit } from "../sections/MiniFit"
import { BecomeAMember } from "../sections/BecomeAMember"

export const HomePage = () => {
    return (
        <>
            <Hero />
            <SellingPoints />
            <Testimonials />
            <MiniFit />
            <BecomeAMember />
        </>
    )
}