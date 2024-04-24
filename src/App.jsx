import { About } from "./components/pages/About.jsx";
import Arrow from "./components/pages/Arrow.jsx";

import Introduction from "./components/pages/Introduction.jsx";
import { Promise } from "./components/pages/Promise.jsx";
const App = () => {
  return (
    <div>
      <Introduction />
      <Arrow />
      <About />
      <Promise />
    </div>
  );
};

export default App;
