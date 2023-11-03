// Logo and navigation burger
import styled from "styled-components";
import data from "../assets/images.json";
// import { BurgerMenu } from "./Burger";

const NavBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: rgba(138, 201, 38, 0.60);
width: 547px;
height: 59px;
padding: 0 20px;
`
const LogoImg = styled.img`
width: 30px;
height: 25px;
border-radius: 120px;
margin-left: 20px;
`

export const Header = () => {
return (
    <>
    <NavBar>
    <LogoImg src={data['logo']} alt="Logo" />
    {/* <BurgerMenu/> */}
    </NavBar>
    </>

)
}

