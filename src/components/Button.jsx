import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #26FFE6;  
    border: none;
    color: #2A3439;
    font-size: 16px;
    font: 'Montserrat Subrayada';
    cursor: pointer;
    border-radius: 10px;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;