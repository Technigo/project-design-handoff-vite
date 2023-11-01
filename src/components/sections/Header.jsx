import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledHeader = styled.header` 
    position:fixed; 
`

const StyledNav = styled.nav`
    display: flex; 
    justify-content: center; 
   
`
const StyledUl = styled.ul`
    background-color: white; 
    display: flex; 
    list-style: none;
    gap: 1rem; 
    `

export const Header = () => {
  return (
    <StyledHeader>
        <img/>
        <StyledNav>
            <StyledUl>
                <Link to={"/"}>Home</Link>
                <li href="#">Articles</li>
                <li href="#">Events</li>
            </StyledUl>
        </StyledNav>
    </StyledHeader>
  )
}
