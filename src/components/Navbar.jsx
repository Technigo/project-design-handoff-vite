import { CiMenuBurger } from "react-icons/ci";

export const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 bg-off-black bg-opacity-30 px-4 py-2 z-50 w-full desktop:px-32">
        <div className="relative flex h-16 items-center justify-between">
          <img src="/logo.png" />
          <div className="hidden desktop:flex">
            <ul className="flex desktop:flex-row list-none justify-between gap-9 font-montserrat cursor-pointer">
              <li className="text-white hover:font-medium">First Timers</li>
              <li className="text-white hover:font-medium">Schedule</li>
              <li className="text-purple hover:font-medium">Buy Sessions</li>
            </ul>
          </div>
          <div className="relative inline-flex items-center justify-center aria-controls=mobile-menu">
            <img className="pr-4" src="/account.png" />
            <CiMenuBurger className="text-5xl text-white" />
          </div>
        </div>
      </nav>
    </>
  );
};
