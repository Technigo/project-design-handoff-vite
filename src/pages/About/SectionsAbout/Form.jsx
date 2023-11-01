import styled from "styled-components";
import { useState } from 'react';
import { SubHeading } from "../../../reusableComp/SubHeading";
import { NormalText } from "../../../reusableComp/NormalText";


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
  <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Name:</label>
        <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInput}
        />
    </div>

    <div>
    <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
        />
    </div>
  </form>
  );
};

