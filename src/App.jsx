import { About } from "./components/pages/About.jsx";
import { AboutTabletDesk } from "./components/pages/AboutTabletDesk.jsx";
import Arrow from "./components/pages/Arrow.jsx";
import { Teachers } from "./components/pages/Teachers.jsx";
import { TeachersTabletdesk } from "./components/pages/TeachersTabletdesk";
import Introduction from "./components/pages/Introduction.jsx";
import { Border } from "./components/pages/Border.jsx";
import { Promise } from "./components/pages/Promise.jsx";
import { Register } from "./components/pages/Register.jsx";
import { Quote } from "./components/pages/Quote.jsx";
import { Contact } from "./components/pages/Contact.jsx";
const App = () => {
  return (
    <div>
      <Introduction />
      <Arrow />
      <About />
      <AboutTabletDesk />
      <Promise />
      <Teachers />
      <TeachersTabletdesk />
      <Border />
      <Register />
      <Border />
      <Quote />
      <Contact />
    </div>
  );
};

export default App;
