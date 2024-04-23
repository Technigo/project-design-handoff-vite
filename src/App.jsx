import { HeroPage } from "./components/HeroPage"
import { TrustIndicators } from "./components/TrustIndicators"
import { ReasonSection } from "./components/ReasonSection"
import { CallToAction } from "./components/CallToAction"

export const App = () => {
  return (
    <div>
      <h1 className="text-xl font-bold underline text-red-500">Hello world!</h1>
      <HeroPage />
      <TrustIndicators />
      <ReasonSection />
      <CallToAction />
    </div>
  )
}
