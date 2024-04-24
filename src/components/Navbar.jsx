import { RiMenuLine } from "react-icons/ri";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-off-black bg-opacity-30 px-4 py-2">
        <div className="relative flex h-16 items-center justify-between">
          <img src="/logo.png" />
          <div className="relative inline-flex items-center justify-center aria-controls=mobile-menu">
            <img className="pr-4" src="/account.png" />
            <RiMenuLine className="text-5xl text-white" />
          </div>
        </div>
      </nav>
    </>
  );
};
