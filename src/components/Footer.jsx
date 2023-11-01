import styled from "styled-components"

const StyledFooter = styled.footer `
    height: 500px; 
    background-color:lightgreen; 
    padding: 1rem; 
    display: flex;
    justify-content: center;

        img {
            height: 50px; 
        }
`

export const Footer = () => {
  return (
    <StyledFooter>
        <img src="https://scalebranding.com/wp-content/uploads/2021/03/Lotus-Yoga-Logo.jpg"/>
    </StyledFooter>
  )
}
