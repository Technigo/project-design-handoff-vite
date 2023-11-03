import { ReactSVG } from 'react-svg';
import hamburgerIcon from '../assets/hamburger.svg';

const HamburgerIcon = (props) => (
  <ReactSVG src={hamburgerIcon} {...props} />
);

export default HamburgerIcon;