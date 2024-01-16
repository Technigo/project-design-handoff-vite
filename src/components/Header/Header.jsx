import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DownArrowIcon from '../../../public/images/downArrow.svg';
import LogoIcon from '../../../public/images/LogoIcon.svg';
import SearchIcon from '../../../public/images/Search.svg';
import HamburgerIcon from '../../../public/images/hamburgerIcon.svg';
import './Header.css';

export const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsDropdownVisible(false); // Close the dropdown after changing the language
  };

  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

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
            <img src={HamburgerIcon} alt='Menu icon' className='header-icon' onClick={toggleDropdown} />
            {isDropdownVisible && (
              <div className="dropdown-menu" ref={dropdownRef}>
                <Link to="/" onClick={() => setIsDropdownVisible(false)}>Play Parkour</Link>
                <Link to="/about" onClick={() => setIsDropdownVisible(false)}>About us</Link>
                <button onClick={() => changeLanguage('en')}>{t('english')}</button>
                <button onClick={() => changeLanguage('sv')}>{t('swedish')}</button>
                <button onClick={() => changeLanguage('es')}>{t('spanish')}</button>
              </div>
            )}
          </>
        )}
        {windowWidth >= 901 && (
          <div className="header-links">
            <div className="play-parkour-link">
              {t('head1')} <img src={DownArrowIcon} alt="Down arrow" className="down-arrow-icon" />
              <div className="parkour-dropdown">
                <Link to="/about">{t('head1')}</Link>
                <Link to="/">Home</Link>
              </div>
            </div>
            <Link to="/">{t('classes')}</Link>
            <Link to="/">{t('prices')}</Link>
            <div className="language-dropdown">
              <span className="language-trigger">
                {t('language')} <img src={DownArrowIcon} alt="Down arrow" className="down-arrow-icon" />
              </span>
          <div className="language-options">
            <span onClick={() => changeLanguage('en')}>{t('english')}</span>
            <span onClick={() => changeLanguage('sv')}>{t('swedish')}</span>
            <span onClick={() => changeLanguage('es')}>{t('spanish')}</span>
          </div>

            </div>
            <button className="join-us-button">{t('joinUs')}</button>
          </div>
        )}
      </div>
    </div>
  );
};
