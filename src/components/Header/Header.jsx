import './Header.css';
import LogoIcon from '../../assets/LogoIcon.svg';
import SearchIcon from '../../assets/Search.svg';
import HamburgerIcon from '../../assets/hamburgerIcon.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header-wrapper'>
      <Link to="/">
      <img src={LogoIcon} alt='Logo Icon' className='logo' />
      </Link>
      <div className='header-icons-wrapper'>
      <Link to="/about">
        <img src={SearchIcon} alt='Search icon' className='header-icon icon-search' />
        </Link>
        <img src={HamburgerIcon} alt='Menu icon' className='header-icon' />
      </div>
    </div>
  )
}
