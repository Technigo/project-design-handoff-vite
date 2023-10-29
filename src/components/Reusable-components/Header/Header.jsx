import { LogoImage } from "../LogoImage";
import { NavigationLinks } from "../NavigationLinks";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    /* Makes sure the HeaderContainer always sticks to the top */
    position: sticky;
    top: 0;
    /* Makes sure the HeaderContainer is always on top of other elements */
    z-index: 1;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <LogoImage />
            <NavigationLinks />
        </HeaderContainer>
    )
}
