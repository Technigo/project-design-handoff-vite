import { Welcome } from './sections/Welcome';
import { HeaderSection } from './sections/HeaderSection';
import { GlobalStyles } from './styles/GlobalStyles';
import { HeaderHeroSection } from './sections/HeaderHeroSection';
import { FooterSection } from './sections/Footer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <HeaderSection />
        <HeaderHeroSection />
        <Welcome />
        <FooterSection />
      </div>
    </>
  );
};

export default App;