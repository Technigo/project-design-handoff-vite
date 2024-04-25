import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { TrustIndicators } from "./components/TrustIndicators"
import { ReasonSection } from "./components/ReasonSection"
import { CallToAction } from "./components/CallToAction"
import { FeedbackSection } from "./components/FeedbackSection"
import { FAQs } from "./components/FAQs"
import { Newsletter } from "./components/Newsletter"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustIndicators />
      <ReasonSection />
      <CallToAction />
      <FeedbackSection />
      <FAQs />
      <Newsletter />
      <Footer />
    </>
  )
}
