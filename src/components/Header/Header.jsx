import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { HeaderFooter } from "./HeaderFooter";

export const Header = () => {
  return (
    <header className="bg-peach">
      <Nav />
      <Hero />
      <HeaderFooter />
    </header>
  );
};
