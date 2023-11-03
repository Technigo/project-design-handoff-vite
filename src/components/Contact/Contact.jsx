import styled from "styled-components"
import { Description } from "../../reusableComponents/Description"
import { Button } from "../../reusableComponents/Button"
import { Link } from "react-router-dom";
import { ContactForm } from "../../pages/ContactForm";
import { useState } from "react";

const ContactDescription = styled(Description)`
display: grid;
grid-template-columns: 1fr;
gap: 10px;
max-width: 100%;
padding: 48px 25px;
`
const ContactButton = styled(Button)`
background-color: var(--red-color);
display: block;
margin: 0 auto;
color: #FFF;
text-align: center;
font-family: var(--heading-font-family);
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 160.5%; /* 51.36px */
`

export const Contact = () => {
const [isContactModalOpen, setContactModalOpen] = useState(false);

const openContactModal = () => {
setContactModalOpen(true);
}

const closeContactModal = () => {
setContactModalOpen(false);
}

const ContactText = "Just north of central Stockholm a few meters from the Roslagsbana train and E18, you will find EdgePerformance. We have ample parking as well as short-term living accommodations nearby at Scandic Täby. Täby Centrum with restaurants and entertainment are within a short walk.Join us as an individual or ask about team memberships. Individual Membership: 650:- / monthTeam Memberships: contact for more information"

return (
<>
  <Link to="/contact-form">
  <ContactButton label="CONTACT US" onClick={openContactModal} />
  </Link>

  <ContactDescription text={ContactText} />
  {isContactModalOpen &&
  <ContactForm isOpen={isContactModalOpen} onClose={closeContactModal} />}
</>
)
}