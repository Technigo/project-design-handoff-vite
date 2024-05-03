export const Navbar = () => {
  return (
    <nav className="fixed flex h-min w-screen items-end justify-between bg-navbar bg-opacity-75 p-4 px-8 backdrop-blur-sm md:px-16 md:py-6 lg:px-32 lg:py-8">
      <div>
        <img
          className="h-10 md:h-16 lg:h-20"
          src="/icons/logo_l.svg"
          alt="Oasis logo"
        />
      </div>
      <div>
        <a href="">
          <img className="h-6" src="/icons/burger_l.png" alt="menu" />
        </a>
      </div>
    </nav>
  );
};
