import menuIcon from '../assets/hamburger-menu.svg';
import logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <div className="h-[40rem] bg-cobra	bg-cover bg-[35%] bg-no-repeat">
      <div className="mx-5 flex justify-center py-7">
        <img className="h-16" src={logo} alt="logo" />
      </div>
      <img
        className="absolute right-5 top-7 h-6 w-6"
        src={menuIcon}
        alt="hamburger-menu"
      />
    </div>
  );
};
