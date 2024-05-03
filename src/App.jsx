import { CoachSection } from "./components/CoachSection";
import { Footer } from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import { HealthierSection } from "./components/HealthierSection";
import { HeroSection } from "./components/HeroSection";
import { NavigationBar } from "./components/NavigationBar";
import { RetreatActivities } from "./components/RetreatActivities";
import { TrustIndicator } from "./components/TrustIndicator";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <HeroSection />
      <TrustIndicator />
      <RetreatActivities />
      <CoachSection />
      <HealthierSection />
      <Footer />
    </>
  );
}