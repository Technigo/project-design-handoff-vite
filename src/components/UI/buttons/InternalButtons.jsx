import { Link } from 'react-router-dom';
import { StyledButton } from './StyledButtons';

//...props
export const InternalButton = ({ to, children, ...props }) => {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <StyledButton {...props}>{children}</StyledButton>
        </Link>
    );
};



