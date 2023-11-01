import styled, { css } from "styled-components";

export const Button = styled.button`
width: 10.5rem; 
padding: 0.75rem; 
border: none; 
border-radius: 30px;
transition: 0.5 ease; 

background-color: var(--yellow);
color: var(--black);

    &:hover {
        cursor: pointer;
        background-color: aqua;
    }

    ${(props) =>
        props.secondary &&
        css`
    background-color: transparent; 
    border: 1px solid var(--yellow);
    color: var(--yellow); 

        &:hover {
            background-color: aqua; 
        }
    `}
`;
