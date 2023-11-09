import { ReactSVG } from 'react-svg';
import hamburgerIcon from '../../assets/hamburger.svg';

const HamburgerIcon = ({ onClick, ...props }) => (
  <div onClick={onClick}>
    <ReactSVG src={hamburgerIcon} {...props} />
  </div>
);

export default HamburgerIcon;
