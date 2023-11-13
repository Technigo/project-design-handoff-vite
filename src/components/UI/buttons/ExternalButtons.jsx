import { StyledButton } from './Button';

export const ExternalButton = ({ href, children }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <StyledButton>{children}</StyledButton>
        </a>
    );
};
//Buttons for external use, But seems the instagram is not real. But now it shuld be ready for use in case we want to add external links.