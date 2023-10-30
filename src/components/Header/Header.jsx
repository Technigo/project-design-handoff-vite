import { Logo } from "../Logo";
import { NavigationLinks } from "../NavigationLinks";
import { Button } from "../Button";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: var(--primary-white);
    /* Makes sure the HeaderContainer always sticks to the top */
    position: sticky;
    top: 0;
    /* Makes sure the HeaderContainer is always on top of other elements */
    z-index: 1;
    /* Makes sure the HeaderContainer is always on top of other elements */
        div {
        display: flex;
        align-items: center;
    }
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo text={"Align"} />
            <div>
                <NavigationLinks />
                <Button className={"brown"} text={"Sign in"} />
            </div>
        </HeaderContainer>
    )
}
