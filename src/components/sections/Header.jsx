import menuIcon from '../../assets/hamburger-menu.svg';
import Logo from '../../assets/Logo.svg';
import { GeneralButton } from '../GeneralButton';

//flex flex-col items-center

export const Header = () => {
  return (
    <header className="grid h-dvh grid-cols-1 grid-rows-[auto_auto_1fr] bg-cobra bg-cover bg-[35%] bg-no-repeat md:max-h-[1133px] xl:max-h-[1024px]">
      <div className="mx-5 flex justify-center py-8 pt-7 xl:hidden">
        <img className="md:h-35 h-25 mt-7" src={Logo} alt="Logo" />
      </div>
      <nav className="mb-28 mt-10 hidden w-max justify-self-center xl:block">
        <ul className="flex flex-row items-end space-x-9 text-lg font-medium">
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
        className="absolute right-5 top-7 h-6 w-6 md:left-5 md:top-9 md:h-10 md:w-10 xl:hidden"
        src={menuIcon}
        alt="hamburger menu"
      />
      <div className="mt-10 flex flex-col justify-center gap-3 text-center font-futura xl:mt-0">
        <h1 className="text-4xl font-bold xl:text-6xl">
          EMPOWERING VINYASA YOGA
        </h1>
        <h2 className="my-4 text-3xl font-bold xl:text-5xl">
          Online studio & Retreats
        </h2>
        <h3 className="pb-7	text-2xl	font-medium xl:text-3xl">
          TO INSPIRE + UPLIFT YOU
        </h3>
        <h3 className="mt-5 text-2xl font-medium xl:text-3xl">Since 2010</h3>
      </div>
      <GeneralButton
        text="Log in"
        customStyle="self-end justify-self-center	mb-14 md:absolute md:right-5 md:mb-0 md:top-9 xl:top-20 xl:right-12 "
      />
    </header>
  );
};
