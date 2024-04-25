import menuIcon from '../../assets/hamburger-menu.svg';
import Logo from '../../assets/Logo.svg';
import { GeneralButton } from '../GeneralButton';

//flex flex-col items-center

export const Header = () => {
  return (
    <header className="grid h-svh grid-cols-1 grid-rows-[auto_auto_1fr] bg-cobra bg-cover bg-[35%] bg-no-repeat md:max-h-[1133px]">
      <div className="mx-5 w-28 justify-self-center py-8 pt-7 md:w-40 xl:hidden">
        <img className="object-cover " src={Logo} alt="Logo" />
      </div>
      <nav className="mb-28 mt-10 hidden w-full justify-center xl:flex">
        <ul className="flex w-9/12 flex-row items-end justify-between	 text-lg font-medium">
          <li>About us</li>
          <li>Retreats</li>
          <li>Free Classes</li>
          <li className="relative top-2">
            <img className="h-20" src={Logo} alt="logo" />
          </li>
          <li>Online Yoga</li>
          <li>Events</li>
          <li>Shop</li>
        </ul>
      </nav>
      <img
        className="absolute right-5 top-7 h-6 w-6 md:left-5 md:top-9 md:h-10 md:w-10 xl:hidden"
        src={menuIcon}
        alt="hamburger menu"
      />
      <div className="flex flex-col justify-center gap-2 px-8 text-center font-futura md:mt-20 md:gap-4 xl:mt-0">
        <h1 className="text-3xl font-bold md:text-4xl xl:text-5xl">
          EMPOWERING VINYASA YOGA
        </h1>
        <h2 className="mt-2 text-xl font-bold md:text-3xl xl:text-4xl">
          Online studio & Retreats
        </h2>
        <h3 className="mb-6 text-lg	font-medium md:text-xl xl:text-2xl">
          TO INSPIRE + UPLIFT YOU
        </h3>
        <h3 className="text-lg font-medium md:text-xl xl:text-2xl">
          Since 2010
        </h3>
      </div>
      <GeneralButton
        text="Log in"
        customStyle="self-end justify-self-center	mb-14 md:absolute md:right-5 md:mb-0 md:top-9 xl:top-20 xl:right-8 xl:w-28"
      />
    </header>
  );
};
