import { Welcome } from './sections/Welcome';
import { HeaderSection } from './sections/HeaderSection';
import { GlobalStyles } from './styles/GlobalStyles';
import { HeaderHeroSection } from './sections/HeaderHeroSection';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <HeaderSection />
        <HeaderHeroSection />
        <Welcome />
      </div>
    </>
  );
};

export default App;