import { NavBarMobile } from "../Components/NavBarMobile";
import { NavBarDesktop } from "../Components/NavBarDesktop";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
`
export const Header = () => {
  {/* conditionally display header for desktop depending the screen size */}
  const isDesktop = window.innerWidth > 834;

  return (
    <>
      {isDesktop ? (
        <HeaderWrapper>
          <NavBarDesktop />
        </HeaderWrapper>
      ) : (
        <HeaderWrapper>
          <NavBarMobile />
        </HeaderWrapper>
      )}      
    </>
  )
}
