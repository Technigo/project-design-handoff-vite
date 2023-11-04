import styled, {css} from "styled-components"

export const Button = styled.button`
  width: fit-content; 
  padding: 16px 80px; 
  font-family: "Raleway"; 
  font-size: 18px; 
  font-weight: 700; 
  border-radius: 32px; 
  border: none; 
  transition: 0.5s ease; 

  background: linear-gradient(#611708, #F6AA1C); 
  color: var(--darkest-red); 

    &:hover {
      opacity: 0.7; 
      cursor: pointer; 
    }

    //Styling for the secondary button
    ${props => props.secondary && css`
    background: transparent; 
    color: var(--primary); 
    border: 1px solid var(--primary); 

      &hover {
        opacity: 0.7; 
        cursor: pointer; 
      }
    `}

    //Styling for the button in navbar
    ${props => props.navbar && css`
    height: fit-content; 
    background: transparent; 
    color: --darkest-red; 
    padding: 10px 48px; 
    border: 1px solid var(--darkest-red); 

      &hover {
        opacity: 0.7; 
        cursor: pointer; 
      }
    `}
  `
   
