import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { Translation } from "../../Translations/Translations";
import "./burgermenu.css"; 
import { useTranslation } from "react-i18next"
import { useState } from "react";

export const BurgerMenu = () => {
const { t } = useTranslation()
const [isMenuOpen, setIsMenuOpen] = useState()

const closeMenu = () => {
setIsMenuOpen(false)
}
  return (
<div>
  <Menu 
    customBurgerIcon={ <img src="/icons/burger-icon.svg" /> }
    burgerButtonClassName={ "burger-icon" } 
    customCrossIcon={ <img src="/icons/exit-icon.svg" /> }
    width={"80%"} 
    isOpen={isMenuOpen}
    left>
     
<ul>
      <Link to={"/"} onClick={closeMenu}>
      <p className="menu-item" >
        {t("Burgermenu.p1")}
        </p>
      </Link>
          
      <Link to={"/about"} onClick={closeMenu}>
      <p className="menu-item">
        {t("Burgermenu.p2")}
        </p>
      </Link>

      <Link to={"/"} onClick={closeMenu}>
      <p className="menu-item">
        {t("Burgermenu.p3")}
        </p>
      </Link>
        
      <Link to={"/"} onClick={closeMenu}>
      <p className="menu-item">
        {t("Burgermenu.p4")}
        </p> 
      </Link>
        
      <Link to={"/"} onClick={closeMenu}>
      <p className="menu-item">
        {t("Burgermenu.p5")}
        </p>
      </Link>
        
      <Link to={"/"} onClick={closeMenu}>
      <p className="menu-item">
        {t("Burgermenu.p6")}
        </p>
      </Link>
    <div className="lang-wrapper">
        <Translation />
      </div>
  </ul>
  </Menu>
</div>
)}