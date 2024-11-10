import { NavLinks } from "../../elements/NavLinks";

export const Burger = () => {
  const navLinksLeft = [
    "getting started",
    "classes",
    "about us",
    "why crossfit mamas?",
  ];
  const navLinksRight = ["search", "log in"];

  return (
    <ul className="flex bg-white absolute w-full left-0 top-[77px] sm:top-[90px] py-40 px-20">
      <div className="flex-grow">
        {navLinksLeft.map((link, index) => (
          <li key={`navlink-left-${index}`} className="mr-8">
            <NavLinks
              className="px-10 text-black hover:text-crimson-light text-nav-tab-mob"
              label={link}
            />
          </li>
        ))}
      </div>
      <div className="align-end">
        {navLinksRight.map((link, index) => (
          <li key={`navlink-right-${index}`} className="ml-8">
            <NavLinks
              className={`px-10 text-black hover:text-crimson-light text-nav-tab-mob ${
                index === 1 ? "text-crimson-light" : ""
              } `}
              label={link}
            />
          </li>
        ))}
      </div>
    </ul>
  );
};
