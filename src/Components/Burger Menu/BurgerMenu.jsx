import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { Translation } from "../../Translations/Translations";
import "./burgermenu.css"; // Import your CSS file for styling
import { useTranslation } from "react-i18next"

export const BurgerMenu = () => {
const { t } = useTranslation()

  return (
<div>
  <Menu 
    customBurgerIcon={ <img src="/icons/burger-icon.svg" /> }
    burgerButtonClassName={ "burger-icon" } 
    customCrossIcon={ <img src="/icons/exit-icon.svg" /> }
    width={"100%"}  
    left>
     
    <ul className="menu-list">

      <Link to={"/"}>
      <p className="menu-item" >
        {t("Burgermenu.p1")}
        </p>
      </Link>
          
      <Link to={"/about"}>
      <p className="menu-item">
        {t("Burgermenu.p2")}
        </p>
      </Link>

      <Link to={"/"}>
      <p className="menu-item">
        {t("Burgermenu.p3")}
        </p>
      </Link>
        
      <Link to={"/"}>
      <p className="menu-item">
        {t("Burgermenu.p4")}
        </p>
      </Link>
        
      <Link to={"/"}>
      <p className="menu-item">
        {t("Burgermenu.p5")}
        </p>
      </Link>
        
      <Link to={"/"}>
      <p className="menu-item">
        {t("Burgermenu.p6")}
        </p>
      </Link>

      

    </ul>
    <div className="lang-wrapper">
        <Translation />
      </div>
  </Menu>
</div>
  );
};
