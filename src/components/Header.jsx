import menuIcon from '../assets/hamburger-menu.svg';
import logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <header className=" flex h-[41rem] flex-col items-center bg-cobra	bg-cover bg-[40%] bg-no-repeat">
      <div className="mx-5 flex justify-center py-8 pt-7">
        <img className="h-16" src={logo} alt="logo" />
      </div>
      <img
        className="absolute right-5 top-7 h-6 w-6"
        src={menuIcon}
        alt="hamburger menu"
      />
      <div className="flex flex-col justify-center text-center	font-futura">
        <h1 className="text-3xl font-bold">EMPOWERING VINYASA YOGA</h1>
        <h2 className="my-4 text-xl	font-bold">Online studio & Retreats</h2>
        <p className="pb-7	text-base font-medium">TO INSPIRE + UPLIFT YOU</p>
        <p className="text-base font-medium">Since 2010</p>
      </div>
      <button className="mt-64 w-40 rounded-[100px] bg-accent-orange	py-3 font-extrabold text-neutral-white">
        Log in
      </button>
    </header>
  );
};
