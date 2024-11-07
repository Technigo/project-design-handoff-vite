import styled from "styled-components";
// import { Menu } from "./Menu"


const Nav = styled.nav`

background: #111010; 
width: 100%;
height: 3.6875rem;
flex-shrink: 0;

 //Desktop styling
 @media (min-width: 768px) {
    background: transparent;
    
    }
`;

export const Navigation = () => {

  return (
    <Nav>
      {/* <Menu /> */}
    </Nav>

  )
}
