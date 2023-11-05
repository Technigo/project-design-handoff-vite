//Currently build so functions could easily be added to submit the form somewhere
//Imported into LetsGetInTouch section
import styled from "styled-components";
import { useState } from 'react';

const FormContainer = styled.form`
background-color: var(--cobalt);
color: #fff;
font-family: var(--jetbrains-mono);
display: flex;
width: auto;
height: 17rem;
padding: 0 2rem 1rem;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 1.5rem;
margin: 2rem 0;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
color: #fff;
font-size: 0.75rem;
font-weight: 200;
padding: 0 0 1rem;
border: none;
border-bottom: 1.5px dashed #fff;
width: 100%;
background-color: transparent;
`;


export const Form = () => {
    const [formData, setFormData] = useState({ name: '', email: ''});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       console.log('Form data submitted:', formData);
    };


  return (
  <FormContainer onSubmit={handleSubmit}>
    <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInput}
        placeholder="your name"
        />
    </FormGroup>

    <FormGroup>
    <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
          placeholder="your email"
        />
    </FormGroup>
  </FormContainer>
  );
};
