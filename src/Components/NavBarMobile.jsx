import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";

export const NavBarMobile = () => {
    const toggleMenu = () => {
        const hamburgerMenu = document.getElementById("hamburger-menu");
        if (hamburgerMenu.style.display === "block") {
          hamburgerMenu.style.display = "none";
        } else {
          hamburgerMenu.style.display = "block";
        }
      }
    
      return (
        <div className="flex space-x-3 w-full">
          <button 
            type="button" 
            className="border-none" 
            onClick={toggleMenu}
          >
            <svg 
              width="24" 
              height="25" 
              viewBox="0 0 24 25" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="menu">
                <path 
                  id="Icon" 
                  d="M4 6.5H20M4 12.5H20M4 18.5H20" 
                  stroke="#545F71" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          <Link to="/"><img className="w-8 h-8" src="src/assets/images/Logo.png" alt="AFH logo" /></Link>
          <button type="button" className="search">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="search">
                <path 
                  id="Icon" 
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                  stroke="#545F71" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          <HamburgerMenu />
        </div>
      )
    }
    
