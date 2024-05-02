import { Logo } from './Logo'
import { Button } from './Button'
import styled from 'styled-components'
import { useState } from 'react'
import { LeftNav } from './LeftNav'
import { Burger } from './Burger'
import { NavMenu } from './NavMenu'

const StyledHeader = styled.header`
  box-sizing: border-box;
  padding: 64px 12px 32px 12px;
  display: flex;
  background-color: var(--60);
  position: relative;
  width: 100%;
  height: 112px;
  justify-content: space-between;
  align-items: center;

  img {
    align-self: center;
  }
  @media (min-width: 744px) and (max-width: 1024px) {
    padding: 32px;
  }

  @media (min-width: 1024px) {
    display: grid;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
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
      <Button $header />
    </StyledHeader>
  )
}
