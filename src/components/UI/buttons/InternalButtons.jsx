import { Link } from 'react-router-dom';
import { StyledButton } from './StyledButton';

export const InternalButton = ({ to, children }) => {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <StyledButton>{children}</StyledButton>
        </Link>
    );
};
//button for internal use/routes - About. 