import './Header.css';
import LogoIcon from '../../assets/LogoIcon.svg';
import SearchIcon from '../../assets/Search.svg';
import HamburgerIcon from '../../assets/hamburgerIcon.svg';

export const Header = () => {
  return (
    <div className='header-wrapper'>
      <img src={LogoIcon} alt='Logo Icon' className='logo' />
      <div className='icons-wrapper'>
        <img src={SearchIcon} alt='Search icon' className='icon icon-search' />
        <img src={HamburgerIcon} alt='Menu icon' className='icon' />
      </div>
    </div>
  )
}
