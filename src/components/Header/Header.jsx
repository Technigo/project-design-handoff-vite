import './Header.css';
import LogoIcon from '../../assets/LogoIcon.svg';
import SearchIcon from '../../assets/Search.svg';
import HamburgerIcon from '../../assets/hamburgerIcon.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

export const Header = () => {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const dropdownRef = useRef(); 

  useEffect(() => {
    // This function checks if the click is outside the dropdown
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false); // Close the dropdown
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='header-wrapper'>
    <Link to="/">
      <img src={LogoIcon} alt='Logo Icon' className='logo' />
    </Link>
    <div className='header-icons-wrapper'>
      <Link to="/about">
        <img src={SearchIcon} alt='Search icon' className='header-icon icon-search' />
      </Link>
      <img src={HamburgerIcon} alt='Menu icon' className='header-icon' onClick={toggleDropdown} />
      {isDropdownVisible && (
        <div className="dropdown-menu" ref={dropdownRef}>
           <Link to="/" onClick={() => setIsDropdownVisible(false)}>Play Parkour</Link> 
          <Link to="/about" onClick={() => setIsDropdownVisible(false)}>About us</Link>
          <button onClick={() => changeLanguage('sv')}>Svenska</button>
          <button onClick={() => changeLanguage('en')}>English</button>
        </div>
      )}
    </div>
  </div>
  )
}
