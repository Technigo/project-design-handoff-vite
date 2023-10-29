import { ContactForm } from "../Reusable-components/ContactForm"
import { LandingContent } from "./LandingContent"
import { Hero } from "./Hero"

export const LandingMain = () => {
    return (
        <main>
            <Hero />
            <ContactForm />
            <LandingContent />
        </main>
    )
}
