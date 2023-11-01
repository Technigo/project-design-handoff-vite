import styled from "styled-components"

const StyledForm = styled.form `
    height: 200px; 
    background-color: var(--darkest-red); 
    display: flex; 
    flex-direction:column; 
    justify-content:center; 
`

export const Form = () => {
  return (
    <StyledForm>
        <label htmlFor="first-name">First name:</label>
        <input type="text" id="first-name" value="John"></input>
        <label htmlFor="last-name">Last name:</label>
        <input type="text" id="last-name" value="Doe"></input>
    </StyledForm>
  )
}
