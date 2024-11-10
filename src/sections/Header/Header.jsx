
import { Introcontent } from "./Introcontent";
import { Slideshow } from "./Slideshow" 

import styled from "styled-components";

const HeaderDesktopView = styled.div`
    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
        display: flex;
        flex-direction: row; /* Row layout on large screens */
        justify-content: space-between; /* Space out items evenly */

        & > * {
        width: 50%; /* Each child takes up 50% on large screens */
        }
    }
`;

export const Header = () => {
    return (
        <section>
            <HeaderDesktopView>
                <Introcontent/>
                <Slideshow/>
            </HeaderDesktopView>
            
        </section>
    )
}