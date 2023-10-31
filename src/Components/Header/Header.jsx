import { Navbar } from "../Navbar/Navbar"
import styled from "styled-components"

export const Header = () => {

    const Header = styled.header `
    background-color: black;
    color: white;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    `
    
  return (
    <Header>
        <Navbar />
        <p>Logo</p>
    </Header>
  )
}
