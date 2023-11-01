import { AboutUs } from "./sections/AboutUs";
import { Header } from "./sections/Header";
import { Member } from "./sections/Member/Member";
import { SectionTwo } from "./sections/SectionTwoFolder/SectionTwo";

// import Button from "./assets/images/Button.svg";

export const App = () => {
  return (
    <>
      <Header />
      <Member />
      <SectionTwo />
      <AboutUs />
    </>
  );
};
