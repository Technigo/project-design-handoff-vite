/* eslint-disable react/no-unescaped-entities */
//import styled
import styled from "styled-components";

//import picture
import Stretching from "../../public/images/stretching2.png";

//import reusables
import { Button } from "../reusables/Button";
import { HeadingTwoVar } from "../reusables/HeadingTwoVar";

//import hooks
import { useState } from "react";

//styles
const FormSection = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
    "img img img img img img img img img img img img"
    "ttl ttl ttl ttl ttl ttl ttl ttl ttl ttl ttl ttl"
    "frm frm frm frm frm frm frm frm frm frm frm frm"
    " btn btn btn btn btn btn btn btn btn btn btn btn";
  row-gap: 20px;
  padding: 20px 0;

  @media all and (min-width: 744px) {
    grid-template-areas:
      "ttl ttl ttl ttl ttl ttl img img img img img img"
      "frm frm frm frm frm frm img img img img img img"
      "btn btn btn btn btn btn img img img img img img";
    row-gap: 17px;
  }
`;

const FormImage = styled.img`
  grid-area: img;
  width: 100%;
  max-width: 600px;
  height: 400px;
  object-fit: contain;
  padding-bottom: 68px;

  @media all and (min-width: 744px) {
    padding-bottom: 0;
    height: auto;
  }
`;

const HeaderWrapper = styled.div`
  grid-area: ttl;
  padding: 0 16px;
`;

const StyledForm = styled.form`
  grid-area: frm;
  padding: 0 16px;

  @media all and (min-width: 744px) {
    align-items: left;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background: var(--primary-white);
  border: none;
  border-radius: 60px;
  padding: 10px 50px;
  height: 67px;
  margin-bottom: 20px;
  font-size: 20px;
  color: var(--primary-blk);
`;

const CheckboxInput = styled.input`
  display: none; //hide the native checkbox
`;

const CheckboxLabel = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-bottom: 53px;

  //custom box styling
  &:before {
    content: " ";
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-grey);
    border-radius: 5px;
    display: flex;
    margin-right: 10px;
  }

  //checked styling
  ${CheckboxInput}:checked + &:before {
    background-color: var(--primary-prpl);
    border: 2px solid var(--primary-prpl);
    /* content: "\2714"; */
    content: "x";
    color: white;
    text-align: center;
    line-height: 18px;
  }
`;

//component
export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wantsNewsletter, setWantsNewsletter] = useState(false);

  //handle form submission (console log for demo)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      email,
      phone,
      wantsNewsletter,
    });
  };

  return (
    <FormSection>
      <FormImage src={Stretching} alt="Woman stretching"></FormImage>
      <HeaderWrapper>
        <HeadingTwoVar>Stay connected, join our newsletter.</HeadingTwoVar>
      </HeaderWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />

        <StyledInput
          type="phone"
          placeholder="Telephone"
          onChange={(event) => setPhone(event.target.value)}
          value={phone}
        />

        <StyledInput
          type="email"
          placeholder="E-mail"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <CheckboxInput
          type="checkbox"
          checked={wantsNewsletter}
          onChange={(event) => setWantsNewsletter(event.target.checked)}
          id="newsletter"
        />
        <CheckboxLabel htmlFor="newsletter">
          I want to stay updated with the latest news, events, workshops and
          special offers.
        </CheckboxLabel>
        <Button type="submit">Subscribe</Button>
      </StyledForm>
    </FormSection>
  );
};
