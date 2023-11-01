import styled from "styled-components";
import { useState } from 'react';

const FormContainer = styled.form`
  background: var(--cobalt);
  display: flex;
  
  padding: 0px 16px 16px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

//const SubmitButton = styled.button``

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

//HANDLE SUMBIT BEHÖVS EJ om jag inte gör en till knapp...