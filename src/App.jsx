import { About } from "./components/pages/About.jsx";
import Arrow from "./components/pages/Arrow.jsx";
import { Teachers } from "./components/pages/Teachers.jsx";
import Introduction from "./components/pages/Introduction.jsx";
import { Border } from "./components/pages/Border.jsx";
import { Promise } from "./components/pages/Promise.jsx";
import { Register } from "./components/pages/Register.jsx";
const App = () => {
  return (
    <div>
      <Introduction />
      <Arrow />
      <About />
      <Promise />
      <Teachers />
      <Border />
      <Register />
      <Border />
    </div>
  );
};

export default App;
