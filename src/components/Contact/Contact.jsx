import styled from "styled-components"
import { Description } from "../../reusableComponents/Description"
import { Button } from "../../reusableComponents/Button"

const ContactDescription = styled(Description)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  max-width: 100%;
  padding: 48px 25px;
`
const ContactButton = styled(Button)`
background-color: var(--red-color);
`

export const Contact = () => {

  const ContactText = "Just north of central Stockholm a few meters from the Roslagsbana train and E18, you will find Edge Performance. We have ample parking as well as short-term living accommodations nearby at Scandic Täby. Täby Centrum with restaurants and entertainment are within a short walk.Join us as an individual or ask about team memberships. Individual Membership:  650:- / monthTeam Memberships: contact for more information"


  return (
    <>
    <ContactButton label="CONTACT US"/>
      <ContactDescription text={ContactText} />
      </>
  )
}

