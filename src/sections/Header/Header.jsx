
import { Introcontent } from "./Introcontent";
import { Slideshow } from "./Slideshow" 

import styled from "styled-components";

const HeaderDesktopView = styled.div`
      @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
      display: grid;
      grid-template-columns: repeat(8, 1fr); /* 8 equal columns */

      & > * {
      grid-column: span 4;
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