import menuIcon from '../assets/hamburger-menu.svg';
import logo from '../assets/logo.svg';
import { HoverableButton } from './HoverableButton';

export const Header = () => {
  return (
    <header className=" flex h-[41rem] flex-col items-center bg-cobra	bg-cover bg-[40%] bg-no-repeat">
      <div className="mx-5 flex justify-center py-8 pt-7 lg:hidden">
        <img className="h-16 md:h-20" src={logo} alt="logo" />
      </div>
      <nav className="mb-28 mt-10 hidden w-4/5 self-center lg:block">
        <ul className="flex flex-row items-end space-x-9">
          <li>About us</li>
          <li>Retreats</li>
          <li>Free Classes</li>
          <li className="relative top-2">
            <img className="h-20" src={logo} alt="logo" />
          </li>
          <li>Online Yoga</li>
          <li>Events</li>
        </ul>
      </nav>
      <img
        className="absolute right-5 top-7 h-6 w-6 md:left-5 md:h-10 md:w-10 lg:hidden"
        src={menuIcon}
        alt="hamburger menu"
      />
      <div className="flex flex-col justify-center text-center	font-futura">
        <h1 className="text-3xl font-bold">EMPOWERING VINYASA YOGA</h1>
        <h2 className="my-4 text-xl	font-bold">Online studio & Retreats</h2>
        <h3 className="pb-7	text-lg	 font-medium">TO INSPIRE + UPLIFT YOU</h3>
        <h3 className="text-lg font-medium">Since 2010</h3>
      </div>
      <HoverableButton
        text="Log in"
        customStyle="mt-64 md:absolute md:right-5 md:mt-0 md:top-7 lg:top-20 lg:right-12 "
      />
    </header>
  );
};
