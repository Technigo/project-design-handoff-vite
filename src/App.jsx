import { TopMenu } from "./components/1-TopMenu.jsx"
import { HeroSection } from "./components/2-HeroSection.jsx"
import { TrustIndicators } from "./components/3-TrustIndicators.jsx"
import { Features } from "./components/4-Features.jsx"
import { Challenge } from "./components/5-Challenge.jsx" 
import { Feedback } from "./components/6-Feedback.jsx"
import { Questions } from "./components/7-Questions.jsx"
import { Newsletter } from "./components/8-Newsletter.jsx"
import { Footer } from "./components/9-Footer.jsx"
import { CarouselProvider } from "./contexts/CarouselContext.jsx"

export const App = () => {
  return (
  <>
    <CarouselProvider>
      <TopMenu />
      <HeroSection />
      <TrustIndicators />
      <Features />
      <Challenge />
      <Feedback />
      <Questions />
      <Newsletter />
      <Footer />
    </CarouselProvider>
  </>
  )
};
