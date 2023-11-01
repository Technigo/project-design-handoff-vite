import styled from "styled-components"
import { ScheduleComponent } from "../ScheduleComponent"

export const StyledSection = styled.section`
  margin: 0 24px; 
`

export const Schedule = () => {
  return (
    <StyledSection>
     <ScheduleComponent/>
    </StyledSection>
  )
}

