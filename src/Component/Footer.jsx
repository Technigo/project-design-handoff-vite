// About us, Play Parkour, FAQ, Contact information och språk
import styled from "styled-components";
import data from "../assets/images.json";
import { Translation } from "./Translation";

const FootBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: rgba(138, 201, 38, 0.60);
width: 547px;
height: 160px;
padding: 0 20px;
`
const LogoImg = styled.img`
width: 76px;
height: 76px;
border-radius: 120px;
margin-left: 20px;
`


export const Footer = () => {


  return (
<>
<FootBar>
<LogoImg src={data['logo']} alt="Logo" />
<Translation/>
</FootBar>
</>
  )
}
