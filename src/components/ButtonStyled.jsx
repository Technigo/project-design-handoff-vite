/* eslint-disable react/prop-types */
import styled from 'styled-components'

const StyledButton = styled.button`
    background: var(--secondary-color);
    color: var(--font-color);
    width: fit-content;
    padding: 10px;
    border: none;
    border-radius: 6px;
    
    &:hover {
        color: var(--font-color);
        background: linear-gradient(180deg, var(--secondary-color), var(--tertiary-color));
    }

    &:active {
        background: var(--tertiary-color);
    }

    &:disabled {
        background: var(--background-color);
    }

    @media (min-width: 740px) {
        padding: 11px 17px;
        font-size: 18px;
        font-weight: 500;
        line-height: 160%;
    }
`

export const ButtonStyled = ({ text, disabled }) => {
    return(
        <>
            <StyledButton disabled={disabled}>{text}</StyledButton>
        </>
    )
}