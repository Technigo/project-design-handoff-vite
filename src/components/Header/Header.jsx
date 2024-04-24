import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { HeaderFooter } from "./HeaderFooter";

export const Header = () => {
  return (
    <header>
      <Nav />
      <Hero />
      <HeaderFooter />
    </header>
  );
};
