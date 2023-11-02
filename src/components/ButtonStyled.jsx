/* eslint-disable react/prop-types */
import styled from 'styled-components'

const StyledButton = styled.button`
    background: var(--secondary-color);
    color: var(--font-color);
    width: fit-content;
    padding: 0.625rem;
    border: none;
    border-radius: 0.375rem;
    
    &:hover {
        color: var(--font-color);
        background: linear-gradient(180deg, var(--secondary-color), var(--tertiary-color));
    }
`

export const ButtonStyled = ({ text }) => {
    return(
        <>
            <StyledButton>{text}</StyledButton>
        </>
    )
}