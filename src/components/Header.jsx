import { Logo } from './Logo'
import { Button } from './Button'
import styled from 'styled-components'
import { useState } from 'react'
import { LeftNav } from './LeftNav'
import { Burger } from './Burger'
import { NavMenu } from './NavMenu'

const StyledHeader = styled.header`
  display: flex;
  background-color: #fffff3;
  position: relative;
  width: 100%;
  height: 112px;
  justify-content: space-between;
  align-items: center;
  img {
    align-self: center;
  }
`

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <StyledHeader>
      <LeftNav />
      <Burger toggleMenu={toggleMenu} />
      <NavMenu open={menuOpen} />
      <Logo />
      <Button />
      {/* to import the others 👇🏻
      <Button type="white" />
      <Button type="green" /> */}
    </StyledHeader>
  )
}
