import { slide as Menu } from "react-burger-menu"
import { Link } from "react-router-dom"
import "./burgermenu.css"

export const BurgerMenu = () => {

    return (
        <div>
            <Menu
                customBurgerIcon={<img src="/burger-icon.svg" />}
                customCrossIcon={<img src="/exit-icon.svg" />}
                width={"100%"}
                left>

                <ul className="menu-list">

                    <Link to={"/"}>
                        <p className="menu-item" >
                            HOME
                        </p>
                    </Link>

                    <Link to={"/about"}>
                        <p className="menu-item">
                            ABOUT
                        </p>
                    </Link>

                    <Link to={"/"}>
                        <p className="menu-item">
                            WHAT WE OFFER
                        </p>
                    </Link>

                    <Link to={"/"}>
                        <p className="menu-item">
                            FIRST-TIMER
                        </p>
                    </Link>

                    <Link to={"/"}>
                        <p className="menu-item">
                            MEMBERSHIP
                        </p>
                    </Link>

                    <Link to={"/"}>
                        <p className="menu-item">
                            CONTACT
                        </p>
                    </Link>

                    <div className="lang-wrapper">
                        <p>EN</p>
                        <p>SE</p>
                    </div>

                </ul>
            </Menu>
        </div>
    );
};
