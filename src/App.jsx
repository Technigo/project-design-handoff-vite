import { HeroSection } from "./components/HeroSection";
import { NavigationBar } from "./components/NavigationBar";
import { RetreatActivities } from "./components/RetreatActivities";
import { TrustIndicator } from "./components/TrustIndicator";

export const App = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <TrustIndicator />
      <RetreatActivities />
    </>
  );
};
