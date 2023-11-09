import styled from "styled-components"
import { Description } from "../../reusableComponents/Description"
import { Button } from "../../reusableComponents/Button"
import { Link, Routes, Route } from "react-router-dom";
import { ContactForm } from "../../pages/ContactForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactDescription = styled(Description)`
display: grid;
grid-template-columns: 1fr;
gap: 10px;
max-width: 100%;
padding: 48px 25px;
@media (min-width: 1024px) {
    padding: 48px 100px;
  }
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
border: none;
`
const ContactLink = styled(Link)`
text-decoration: none;

`

export const Contact = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { t } = useTranslation("contact");


  const closeContactForm = () => {
    setShowContactForm(false);
  };
  const contactText = t("contactText");
  const contactButtonLabel = t("contactButtonLabel");



return (
  <>
      <ContactLink  to="/information/contact-form" >
        <ContactButton label={contactButtonLabel} />
      </ContactLink>
      {showContactForm && <ContactForm isOpen={showContactForm} onClose={closeContactForm} />}
    <ContactDescription text={contactText} />
    <Routes>
        <Route path=":contact-form" element={<ContactForm />} />
      </Routes> 
    </>
)
}