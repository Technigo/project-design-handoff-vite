import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Menu, Hamburger, NavLink, NavList, BookButton } from './StyledComponents';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo><Link to="/">Logo</Link></Logo>
      <Menu>
        <NavList>
          <NavLink><Link to="/about">About</Link></NavLink>
          <NavLink><Link to="/classes">Classes</Link></NavLink>
          <NavLink><Link to="/studio">Studio</Link></NavLink>
        </NavList>
        <BookButton><Link to="/book">Book</Link></BookButton>
        <Hamburger>☰</Hamburger>
      </Menu>
    </HeaderWrapper>
  );
}
