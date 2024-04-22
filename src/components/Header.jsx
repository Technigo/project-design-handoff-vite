import menuIcon from '../assets/hamburger-menu.svg';
import logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <div className="bg-cobra h-800 bg-cover	bg-center bg-no-repeat">
      <div className="mx-5 flex py-7">
        <div className="flex grow justify-center">
          <img src={logo} />
        </div>
        <img className="justify-self-end" src={menuIcon} />
      </div>
    </div>
  );
};
