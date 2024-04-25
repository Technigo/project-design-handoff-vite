import { BecomeMember } from "./components/BecomeMember";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Introduction } from "./components/Introduction";
import { Programs } from "./components/Programs";

export const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Introduction />
      {/* <Programs />
       <BecomeMember />
      <Footer /> */}
    </div>
  );
};
