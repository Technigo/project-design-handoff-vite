import './Header.css';
import LogoIcon from '../../assets/LogoIcon.svg';
import SearchIcon from '../../assets/Search.svg';
import HamburgerIcon from '../../assets/hamburgerIcon.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import DownArrowIcon from '../../assets/downArrow.svg';

export const Header = () => {
// state for hamburger menu
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // State to keep track of the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// State for translation
  const { t, i18n } = useTranslation();

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

  useEffect(() => {
    // This effect sets up a resize event listener to update the windowWidth state
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
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
      {windowWidth < 901 && (
        <>
          {/* Hamburger icon only shown when window width is less than 901px */}
      <img src={HamburgerIcon} alt='Menu icon' className='header-icon' onClick={toggleDropdown} />
       {/* Dropdown menu conditionally rendered based on isDropdownVisible and windowWidth */}
      {isDropdownVisible && (
        <div className="dropdown-menu" ref={dropdownRef}>
           <Link to="/" onClick={() => setIsDropdownVisible(false)}>Play Parkour</Link> 
          <Link to="/about" onClick={() => setIsDropdownVisible(false)}>About us</Link>
          
          <button onClick={() => changeLanguage('sv')}>Svenska</button>
          <button onClick={() => changeLanguage('en')}>English</button>
        </div>
      )}
       </>
       )}
       {windowWidth >= 901 && (
        <div className="header-links">
             {/* Play Parkour link with dropdown */}
            <div className="play-parkour-link">
              {t('Header.link2')} <img src={DownArrowIcon} alt="Down arrow" className="down-arrow-icon" />
              <div className="parkour-dropdown">
                  <Link to="/about">{t('Header.link1')}</Link>
                  <Link to="/">Home</Link>
                </div>
            </div>
            <Link to="/">{t('Header.link3')}</Link>
          <Link to="/">{t('Header.link4')}</Link>
          <div className="language-dropdown">
            <span className="language-trigger">
              Language <img src={DownArrowIcon} alt="Down arrow" className="down-arrow-icon" />
            </span>
            <div className="language-options">
              <span onClick={() => changeLanguage('en')}>English</span>
              <span onClick={() => changeLanguage('sv')}>Svenska</span>
            </div>
            </div>
          <button className="join-us-button">{t('Header.link5')}</button>
        </div>
      )}
    </div>
  </div>
  )
}
