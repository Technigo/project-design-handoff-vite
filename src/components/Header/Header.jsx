import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { HeaderFooter } from "./HeaderFooter";

export const Header = () => {
  return (
    <header className="relative">
      <Nav />
      <Hero />
      <HeaderFooter />
    </header>
  );
};
