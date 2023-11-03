import  { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* display: ${props => props.isOpen ? 'block' : 'none'}; */
  z-index: 999;
  
`;

const ModalContent = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 300px;
  height: 650px;
padding: 14px 7px;
  border: 2px solid #000;
background: linear-gradient(180deg, #2AA9C0 42.16%, #FFF 96.23%);
`;
const FormAria = styled.form`
display: grid;
grid-template-columns: 1fr;
`
const InputField = styled.input`
  border: none;
  border-bottom: 2px solid #000;
  background: transparent; 
  outline: none; 
  width: 100%; 
  padding: 5px 0; 
`;

const TextField = styled.textarea`
border: none;
border-bottom: 2px solid #000; 
background: transparent;
outline: none; 
width: 100%; 
padding: 5px 0; 
`
export const ContactForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to a server.
  }

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <span className="close-button" onClick={onClose}>X</span>
        <h2>Contact Form</h2>
        <FormAria onSubmit={handleSubmit}>
  <InputField type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
  <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
  <TextField placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
  <button type="submit">Send My Inquiry</button>
</FormAria>
      </ModalContent>
    </ModalContainer>
  );
}

