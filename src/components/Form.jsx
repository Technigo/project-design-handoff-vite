//import styled
import styled from "styled-components";

//import picture
import Stretching from "../../public/images/stretching.png";

//import reusables
import { Button } from "../reusables/Button";
import { HeadingTwo } from "../reusables/HeadingTwo";

//import hooks
import { useState } from "react";

//styles
const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormWrapper = styled.div`
  background: white;
`;

const FormImage = styled.img``;

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
      <FormWrapper>
        <HeadingTwo>Stay connected, join our newsletter.</HeadingTwo>

        <form onSubmit={handleSubmit}>
          {/* name input */}
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          {/* phone input */}
          <input
            type="phone"
            placeholder="Telephone"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
          />
          {/* email input */}
          <input
            type="email"
            placeholder="E-mail"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <label>
            I want to stay updated with the latest news, events, workshops and
            special offers.
            <input
              type="checkbox"
              checked={wantsNewsletter}
              onChange={(event) => setWantsNewsletter(event.target.checked)}
            />
          </label>
          <Button type="submit">Subscribe</Button>
        </form>
      </FormWrapper>
    </FormSection>
  );
};
