import { useState } from 'react';
import styled from 'styled-components';
import { Heading } from '../reusableComponents/Heading';
import { Description } from '../reusableComponents/Description';

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
max-width: 100%;
height: 650px;
padding: 14px 20px;
border: 2px solid #000;
background: linear-gradient(180deg, #2AA9C0 42.16%, #FFF 96.23%);
box-sizing: border-box;
`;
const FormAria = styled.form`
display: grid;
grid-template-columns: 1fr;
`
const InputField = styled.input`
border: none;
border-bottom: 2px solid  #676767;
background: transparent;
outline: none;
width: 100%;
height: 100px;
padding: 5px 0;
box-sizing: border-box;
`;

const TextField = styled.textarea`
border: none;
border-bottom: 2px solid#676767;
background: transparent;
outline: none;
width: 100%;
height: 100px;
padding: 5px 0;
`
const ButtonForm = styled.button`
background-color: var(--red-color);
color: white;
border: none;
padding: 15px;
margin-top: 20px;
width: 283px;
justify-content: center;
align-items: flex-end;
gap: 10px;

`
const FormHeading = styled(Heading)`
font-family: var(--heading-font-family);
text-align: center;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const FormParagraph = styled(Description)`
color: #FFF;
text-align: center;
font-family: Arsenal;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 160.5%; /* 28.89px */
`



export const ContactForm = ({ isOpen, onClose }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const MainHeading = "I' m interested in gaining my edge!";
  const Subheading = " You will get a response within 24 hours."


const handleSubmit = (e) => {
e.preventDefault();
// Handle form submission, e.g., sending data to a server.
}

return (
<ModalContainer isOpen={isOpen}>
  <ModalContent>
    <span className="close-button" onClick={onClose}>X</span>
      <FormHeading  text={MainHeading}/>
      <FormParagraph text={Subheading} />
    <FormAria onSubmit={handleSubmit}>
      <InputField type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
        <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <TextField placeholder="Goals" value={message} onChange={(e)=> setMessage(e.target.value)} />
    <ButtonForm type="submit">Send My Inquiry</ButtonForm>
    </FormAria>
  </ModalContent>
</ModalContainer>
);
}