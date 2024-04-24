import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-plum-light flex justify-center py-[70px]">
      <nav className="navbar">
        <ul className="items-center px-12 flex flex-wrap justify-center">
          <li>
            <NavLink
              className="px-10 text-white hover:text-grey text-ps-desktop md:text-h2-desktop"
              to="/"
            >
              contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-10 text-white hover:text-grey text-ps-desktop md:text-h2-desktop"
              to="/"
            >
              faq
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-10 text-white hover:text-grey text-ps-desktop md:text-h2-desktop"
              to="/"
            >
              follow us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-10 text-white hover:text-grey text-ps-desktop md:text-h2-desktop"
              to="/"
            >
              terms & conditions
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-10 text-white hover:text-grey text-ps-desktop md:text-h2-desktop"
              to="/"
            >
              select language
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-10 text-white hover:text-grey text-ps-desktop md:text-h2-desktop"
              to="/"
            >
              log in
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
