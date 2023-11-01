import styled from "styled-components"
// import { Link } from "react-router-dom"

const StyledButton = styled.button`
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
  `
   

export const PrimaryButton = ({text}) => {

  return (

      <StyledButton>{text}</StyledButton>
 
  )
}
