import { NavLink } from "react-router-dom";
// import { slide as Menu } from "react-burger-menu";
import "./navigation-links.css";

// var styles = {
//     bmBurgerButton: {
//         position: 'fixed',
//         width: '36px',
//         height: '30px',
//         left: '36px',
//         top: '36px'
//     },
//     bmBurgerBars: {
//         background: '#373a47'
//     },
//     bmBurgerBarsHover: {
//         background: '#a90000'
//     },
//     bmCrossButton: {
//         height: '24px',
//         width: '24px'
//     },
//     bmCross: {
//         background: '#bdc3c7'
//     },
//     bmMenuWrap: {
//         position: 'fixed',
//         height: '100%'
//     },
//     bmMenu: {
//         background: '#373a47',
//         padding: '2.5em 1.5em 0',
//         fontSize: '1.15em'
//     },
//     bmMorphShape: {
//         fill: '#373a47'
//     },
//     bmItemList: {
//         color: '#b8b7ad',
//         padding: '0.8em'
//     },
//     bmItem: {
//         display: 'inline-block'
//     },
//     bmOverlay: {
//         background: 'rgba(0, 0, 0, 0.3)'
//     }
// }

export const NavigationLinks = () => {
    return (

        <nav>
            <ul>
                <li><NavLink to={"/at-home"}>At home</NavLink></li>
                <li><NavLink to={"/studio"}>Studio</NavLink></li>
                <li><NavLink to={"/about-us"}>About us</NavLink></li>
                <li><NavLink to={"/contact-us"}>Contact us</NavLink></li>
                <li><NavLink to={"/meet-the-teachers"}>Meet the teachers</NavLink></li>
                <li><NavLink to={"#"}>Search</NavLink></li>
                <li><NavLink to={"/sign-up"}>Sign up</NavLink></li>
            </ul>
        </nav>

    )
}
{/* <Menu styles={styles} right className="bm-menu">*/ }
{/* <NavBar> */ }
{/* </NavBar> */ }
{/* </Menu>*/ }