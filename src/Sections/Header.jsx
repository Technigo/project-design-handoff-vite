import { useMediaQuery } from "react-responsive";
import { NavBarMobile } from "../Components/NavBarMobile";
import { NavBarDesktop } from "../Components/NavBarDesktop";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
`

export const Header = () => {
  {/* conditionally display header for desktop depending the screen size */}
  const isDesktop = useMediaQuery({minWidth: 834});

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
