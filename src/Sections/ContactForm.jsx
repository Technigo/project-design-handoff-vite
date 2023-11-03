import { useState } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`
const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Intro = styled.h3`
  display: none;

  @media (min-width: 394px) {
    display: block;
    font-size: var(--heading-size-mobile);
    font-weight: var(--heading-weight);
    line-height: var(--heading-height-mobile);
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FormInput = styled.input`
  width: 100%;
  background: var(--review);
  border-radius: 10px;
  padding: 10px 30px;
  height: 56px;

  @media (min-width: 394px) and (max-width: 834px) {
    width: 60%;
  }
`

const FormLabel = styled.label`
  color: rgba(0, 0, 0, 50%);
  font-size: 30px;
  font-weight: 500;
  line-height: 36.33px;
`

const FormTextArea = styled.textarea`
  width: 100%;
  background: var(--review);
  border-radius: 10px;
  padding: 10px 30px;
  height: 339px;
`

const SendBtn = styled.button`
  border-radius: var(--medium-radius);
  border: none;
  padding: 10px 30px;
  background-color: var(--hover); 
  color: #FFFFFF;
  font-family: var(--font);
  font-size: var(--text-size-mobile);
  font-weight: var(--text-weight);
  line-height: var(--text-height-mobile);
  width: fit-content;
  
  @media (min-width: 394px) {
    font-size: 30px;
    font-weight: 500;
    line-height: 36.33px;
  }
  
  @media (min-width: 835px) {
    &:hover {
    background-color: var(--secondary);
    }
  } 
`

const ContactImage = styled.img`
  display: none;

  @media (min-width: 835px) {
    display: block;
  }
`

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState("");

  const handleAnswers = () => {
    if (!name || !email || !message) {
      alert("Please fill in the fields!");
    } else if (!email.includes("@")) {
      alert("Please fill in a valid email address!")
    } else {
      handleSubmit(); //why cannot submit when user has updated a correct email?
    }
  }

  const handleInputNameChange = (e) => {
    setName(e.target.value);
  }

  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);
  }
 
  const updateTextarea = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will contact you shortly!");
  };

  return (
    <SectionWrapper>
      <FormWrapper>
        <FormContent>
          <Intro>Have more questions or feedback? Message us!</Intro>
          <InputWrapper>
            <FormLabel htmlFor="name">name</FormLabel>
            <FormInput type="text" name="name" value={name} onChange={handleInputNameChange}></FormInput>
          </InputWrapper>

          <InputWrapper>
            <FormLabel htmlFor="email">email</FormLabel>
            <FormInput type="text" name="email" value={email} onChange={handleInputEmailChange}></FormInput>
          </InputWrapper>

          <InputWrapper className="full-message">
            <FormLabel htmlFor="message">message</FormLabel>
            <FormTextArea name="message" value={message} onChange={updateTextarea}></FormTextArea>
          </InputWrapper>
        </FormContent>
        <SendBtn type="submit" onClick={handleAnswers}>Send</SendBtn>
      </FormWrapper>
      <ContactImage src="./images/contact.png" alt="person working on a laptop" />
    </SectionWrapper>
  )
}
