import { HeroPage } from "./components/HeroPage"
import { TrustIndicators } from "./components/TrustIndicators"
import { ReasonSection } from "./components/ReasonSection"

export const App = () => {
  return (
    <div>
      <h1 className="text-xl font-bold underline text-red-500">Hello world!</h1>
      <HeroPage />
      <TrustIndicators />
      <ReasonSection/>
    </div>
  )
}
