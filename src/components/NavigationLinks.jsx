import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
    display: flex;
    ul {
        display: flex;
        list-style: none;
        li {
            padding-right: 1rem;
            a {
                text-decoration: none;
            }
        }
    }
`

export const NavigationLinks = () => {
    return (
        <NavBar>
            <ul>
                <li><NavLink to={"/at-home"}>At home</NavLink></li>
                <li><NavLink to={"/studio"}>Studio</NavLink></li>
                <li><NavLink to={"/about-us"}>About us</NavLink></li>
                <li><NavLink to={"/contact-us"}>Contact us</NavLink></li>
                <li><NavLink to={"/meet-the-teachers"}>Meet the teachers</NavLink></li>
                <li><NavLink to={"#"}>Search</NavLink></li>
                <li><NavLink to={"/sign-up"}>Sign up</NavLink></li>
            </ul>
        </NavBar>
    )
}
