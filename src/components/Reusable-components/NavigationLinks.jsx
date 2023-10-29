import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
    display: flex;
    li {
        padding-left: 1rem;
    }
`

export const NavigationLinks = () => {
    return (
        <nav>
            <Ul>
                <li><NavLink to={"/"}>Startpage</NavLink></li>
                <li><NavLink to={"/content-page"}>Content Page</NavLink></li>
            </Ul>
        </nav>
    )
}
