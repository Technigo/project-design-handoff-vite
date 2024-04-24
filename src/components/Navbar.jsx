import { RiMenuLine } from "react-icons/ri";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-black bg-opacity-30">
        <div className="relative flex h-16 items-center justify-between">
          <img src="/logo.png" />
          <div className="relative inline-flex items-center justify-center aria-controls=mobile-menu">
            <img src="/account.png" />
            <RiMenuLine className="text-5xl"/>
          </div>
        </div>
      </nav>
    </>
  );
};
