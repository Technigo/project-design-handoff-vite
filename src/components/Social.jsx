import styled from 'styled-components'
import { Instagram } from './Instagram'
import { Facebook } from './Facebook'
import { Linkedin } from './Linkedin'
import { NavLink } from 'react-router-dom'
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
`
export const Social = () => {
  return (
    <StyledDiv>
      <NavLink to="/">
        <Facebook />
      </NavLink>
      <NavLink to="/">
        <Linkedin />
      </NavLink>

      <NavLink to="/">
        <Instagram />
      </NavLink>
    </StyledDiv>
  )
}
